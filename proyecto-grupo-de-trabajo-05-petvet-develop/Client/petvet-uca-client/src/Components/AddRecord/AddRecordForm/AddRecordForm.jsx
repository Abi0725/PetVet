import React from "react";
import "./AddRecordForm.css"

const AddRecordForm = () => {
    return (
        <div className="div-form">
            <form>
                <ul>
                    <li>
                        <label for="fdate">Fecha</label>
                        <input type="date" id="fdate"></input>
                    </li>
                    <li>
                        <label for="fweight">Peso</label>
                        <input type="number" id="fweight"></input>
                    </li>
                    <li>
                        <label for="freason">Motivo de consulta</label>
                        <input type="text" id="freason"></input>
                    </li>
                    <li>
                        <label for="ftreatment">Tratamiento</label>
                        <input type="text" id="ftreatment"></input>
                    </li>
                    <li>
                        <label for="fnextdate">Proxima cita</label>
                        <input type="date" id="fnextdate"></input>
                    </li>
                </ul>
                <div className="btn-div-form">
                    <button>Guardar</button>
                    <button>Cancelar</button>
                </div>
            </form>
        </div>
    )
}