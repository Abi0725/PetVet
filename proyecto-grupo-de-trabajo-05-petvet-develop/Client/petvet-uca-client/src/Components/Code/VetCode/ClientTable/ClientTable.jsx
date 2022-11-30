import React from "react";
import ClientRow from "./ClientRow/ClientRow";
import "./ClientTable.css"

const ClientTable = ({clients = []}) => {

    const clientsMapped = clients.map(client => {
        return (
            <ClientRow
                key={client._id}
                name={client.name}
                phone={client.phone}
            />
        )
    })

    return (
        <div className="client-table">
            <p>Clientes</p>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {clientsMapped}
                </tbody>
            </table>
        </div>
    )
}

export default ClientTable;