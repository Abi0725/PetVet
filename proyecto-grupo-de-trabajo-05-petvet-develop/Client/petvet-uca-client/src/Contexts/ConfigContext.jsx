import React from "react";

const ConfigContext = React.createContext();

export const useConfigContext = () => {
    const context = React.useContext(ConfigContext)

    if(!context){
        throw new Error("useConfigContext must be call inside of a ConfigContextProvider component");
    }
    
    return context;
}
