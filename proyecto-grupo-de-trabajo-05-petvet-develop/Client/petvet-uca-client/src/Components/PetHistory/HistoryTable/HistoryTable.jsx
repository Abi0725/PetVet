import React from "react";
import "./HistoryTable.css"
import TableRow from "./TableRow/TableRow";

const HistoryTable = ({appointments = []}) => {

    const appointmentsMapped = appointments.map(appointment => {
        return (
            <TableRow
                key={appointment._id}
                date={appointment.date}
                reason={appointment.reason}
                treatment={appointment.treatment}
                nextDate={appointment.nextDate}
            />
        )
    })

    return (
        <div id="history-table">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Motivo de consulta</th>
                        <th scope="col">Tratamiento</th>
                        <th scope="col">Proxima cita</th>  
                    </tr>
                </thead>
                <tbody>
                    {appointmentsMapped}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryTable;