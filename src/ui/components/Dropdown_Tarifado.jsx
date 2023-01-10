import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Dropdown_Tarifado = (props) => {
    const { object } = props
    const setFinalSelectedValue=object.setFinalSelectedValue
    const url = "http://192.168.1.17/user/cartllacontrol/tarifado"
    const [selectedTarifado, setSelectedTarifado] = useState("")
    const [selectedTarifadoName, setSelectedTarifadoName] = useState("")
    const [dataTarifado, setDataTarifado] = useState("")

    useEffect(() => {
        axios.post(url, { CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica, Cartilla: object.Cartilla })
            .then((response) => {
                setDataTarifado(response.data)
            });
    }, [object.Cartilla]);

    const tarifado = dataTarifado
        ? Object.entries(dataTarifado).map(([key, value]) => (


            <Dropdown.Item key={key} onClick={() => handleOptionTarifado(dataTarifado[key]["codtarifado"], dataTarifado[key]["TARIFADO"])}
            >{`${dataTarifado[key]["TARIFADO"]}`}</Dropdown.Item>
        ))
        : null;
    
    const handleOptionTarifado = (option, name) => {
        setSelectedTarifadoName(name)
        setSelectedTarifado(option)
        const dataTable={toEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica, Cartilla: object.Cartilla,Tarifado: selectedTarifado}
        setFinalSelectedValue(dataTable)

    }

    return (
        <div>
            <Dropdown className='dropdown-tarifados'>
                <Dropdown.Toggle>
                    {selectedTarifadoName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {tarifado}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Dropdown_Tarifado