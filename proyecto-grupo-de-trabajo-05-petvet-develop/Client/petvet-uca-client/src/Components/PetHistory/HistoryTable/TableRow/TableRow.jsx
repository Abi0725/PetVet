import React from "react";
import "./TableRow.css"

const TableRow = ({ date = '', weight = '', reason = '', treatment = '', nextDate = '' }) => {
    return (
        <tr>
            <td>{date}</td>
            <td>{weight}</td>
            <td>{reason}</td>
            <td>{treatment}</td>
            <td>{nextDate}</td>
        </tr>
    )
}

export default TableRow;