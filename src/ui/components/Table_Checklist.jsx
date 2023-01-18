import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Alerta from './Alert-error';


const Table_Checklist = (props) => {
    const { object } = props
    const url = "http://192.168.1.17/user/cartllacontrol/tarifado/list"
    const [dataTarifado, setDataTarifado] = useState("")
    const [selectedTarifado, setSelectedTarifado] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.post(url, { CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica, Cartilla: object.Cartilla, Tarifado: object.Tarifado }).
            then((response) => {
                setDataTarifado(response.data)
            })
    }, [object.Tarifado])

    const aprobarPartida = (e) => {
        const urlInsert = "http://192.168.1.17/user/cartllacontrol/tarifado/list/insertid"

        axios.post(urlInsert, {}, { params: { item: dataTarifado[0]["id"], } }).
            catch(() => {
                setError(!error)
                setTimeout(setError(!error), 1000);


            })
    }

    const elements = dataTarifado
        ? Object.entries(dataTarifado).map(([key, value]) => (
            <Table className='Table' style={{ width: "100%",height:"100%" }} key={key} responsive
                striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Contratista</th>
                        <th>Tarifado</th>
                        <th>Actividad</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{`${dataTarifado[key]["id"]}`}</td>
                        <td>{`${dataTarifado[key]["Contratista1"]}`}</td>
                        <td>{`${dataTarifado[key]["TARIFADO"]}`}</td>
                        <td>{`${dataTarifado[key]["ACTIVIDAD"]}`}</td>
                        <td>{`${dataTarifado[key]["ESTADO"]}`}</td>
                        <td><Button variant="danger">Rechazar</Button>{' '}</td>
                    </tr>
                </tbody>
            </Table>

        ))
        : null;

    return (
        <div>
            <div className='container-table'>
                {elements}
            </div>

            <div className='container-button-alerta'>
                <div className='button-partida' >
                    <Button onClick={aprobarPartida} variant="success">Aprobar Partida</Button>{' '}
                </div>
            </div>
            <Alerta show={error} onHide={() => setError(false)} />
        </div>

    )
}

export default Table_Checklist