import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Dropdown_Tarifado from './Dropdown_Tarifado';

const Dropdown_cartilla = (props) => {
    const { object } = props
    const {setFinalSelectedValue}=props
    const [selectedCartilla, setSelectedCartilla] = useState("")
    const [selectedCartillaName, setSelectedCartillaName] = useState("")
    const [dataCartilla, setDataCartilla] = useState("")
    const url = "http://192.168.1.17/user/cartillacontrol"



    useEffect(() => {
        axios.post(url, { CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica })
            .then((response) => {
            setDataCartilla(response.data)
            });
    }, []);
    
    useEffect(() => {
        setFinalSelectedValue("")
        console.log(object)
    }, [object.CtoEmpresa]);

    const data_tf={ CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica ,Cartilla:selectedCartilla,setFinalSelectedValue:setFinalSelectedValue}

    const cartilla = dataCartilla
        ? Object.entries(dataCartilla).map(([key, value]) => (


            <Dropdown.Item style={{height:"30px"}} key={key} onClick={() => handleOptionCartilla(dataCartilla[key]["codigo_cartilla"],dataCartilla[key]["Expr1"])}
            >{`${dataCartilla[key]["Expr1"]}`}</Dropdown.Item>
        ))
        : null;

    const handleOptionCartilla = (option,name) => {
        setSelectedCartillaName(name)
        setSelectedCartilla(option)

    }
    return (
        <div className='container-cartillatarifado'>
            <div className="tittle-cartilla">
                <h2>SELECCIONE CARTILLAS CONTROL DE CALIDAD</h2>
            </div>
            <div className='container-cartilla'>
                <p>Cartilla Control de Calidad:</p>
                <Dropdown className='dropdown-cartillas'>
                    <Dropdown.Toggle style={{height:"45px"}}>
                        {selectedCartillaName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ overflowY: 'scroll', maxHeight: '200px' }}>
                        {cartilla}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='container-tarifado'>
                <p>Partida del Tarifado:</p>
                <Dropdown_Tarifado object={data_tf}/>
            </div>

        </div>
    )
}

export default Dropdown_cartilla