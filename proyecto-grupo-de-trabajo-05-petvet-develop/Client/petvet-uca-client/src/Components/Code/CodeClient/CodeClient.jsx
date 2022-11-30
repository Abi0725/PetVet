import React from "react";
import "./CodeClient.css"

const CodeClient = ({ code = '' }) => {
    return (
        <div id="code-client">
            <p>Su codigo es:</p>    
            <div><p className="code"> {code} </p></div>
        </div>
    )
}

export default CodeClient;