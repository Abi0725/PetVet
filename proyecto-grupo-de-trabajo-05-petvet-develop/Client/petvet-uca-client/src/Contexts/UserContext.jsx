import axios from "axios";
import React, { useEffect, useState } from "react";


const TOKEN_KEY = "a7f65d97bcf2a7e1a24d13818ca2625a07be6fbb888b3ea577820a82cd3cb9f3";
const UserContext = React.createContext()

export const UserContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
      const _token = getTokenLS();
  
      if (_token) {
        setToken(_token);
      }
    }, []);

    useEffect(() => {
      FetchUserInfo()
    }, [token] )

    const FetchUserInfo = async () => {
      if (!token){
        return;
      }

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const { data } = await axios.get("https://api-petvet-production.up.railway.app/api/auth/whoami");
        setUser(data)
      } catch (error) {
        logout();
      }

    }

    const login = async (identifier, password) => {
      try {
        const { data } = await axios.post("https://api-petvet-production.up.railway.app/api/auth/signin", { identifier, password });
        const _token = data.token;

        setToken(_token);
        setTokenLS(_token);

        toast.success("Signin successful");
      } catch (error) {
        const { status } = error.response || { status: 500 };
        const msgs = {
          "404": "User not found",
          "401": "Unauthorized",
          "500": "Unexpected error"
        };
        
        logout();
        console.log(msgs[String(status)]);
      }
    }

    const logout = () => {
      removeTokenLS()
      setToken(null)
      setTokenLS(null)
    } 

    const register = async (username, email, password) => {
      try {
        await axios.post("https://api-petvet-production.up.railway.app/api/signup", { username, email, password });
        toast.success("Signup successful");
      } catch(error) {
        const { status } = error.response || { status: 500 };
        const msgs = {
          "400": "Wrong Fields",
          "409": "User already exists",
          "500": "Unexpected error"
        }

      toast.error(msgs[String(status)]);
      }
    }

    const state = {
      token,
      user,
      login,
      logout,
      register
    }

    return <UserContext.Provider value={state} {...props} />

    
}


export const useUserContext = () => {
  const context = React.useContext(UserContext)

  if (!context) {
    throw new Error("useUserContext must be call inside of a UserContextProvider component");
  }

  return context;
}

const setTokenLS = (token) => localStorage.setItem(TOKEN_KEY, token);
const getTokenLS = () => localStorage.getItem(TOKEN_KEY);
const removeTokenLS = () => localStorage.removeItem(TOKEN_KEY);