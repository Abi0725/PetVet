import React from "react";

const ClientRow = ({name = '', phone = ''}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default ClientRow