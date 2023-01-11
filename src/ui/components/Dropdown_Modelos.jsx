import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';







const Modelos = (props) => {
    const url = "http://192.168.1.17/user/empresas/obras/sector/ufisica/modelo"
    const [selectedModelo, SetSelectedModelo] = useState("")
    const [dataModelo, SetDataModelo] = useState("")
    const { object } = props;
    const setSelectedValue = object.setSelectedValue;

    useEffect(() => {
        axios.post(url, { CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica })
            .then((response) => {
                SetDataModelo(response.data)
            });
    }, [object.uFisica]);

    useEffect(()=>{
        if(dataModelo[0] && dataModelo[0]["CodMaeVivienda"] ){
            console.log(dataModelo)
            SetSelectedModelo(dataModelo[0]["CodMaeVivienda"])
            const data = { modelo: selectedModelo, CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica }
            setSelectedValue(data)}
    },[dataModelo])

    useEffect(() => {
        SetSelectedModelo("")
    }, [object.CtoEmpresa]);

    useEffect(() => {
        SetSelectedModelo("")
    }, [object.CtoCodigo]);

    useEffect(() => {
        SetSelectedModelo("")
    }, [object.Sector]);



    const modelo = dataModelo&& dataModelo[0] 
        ? Object.entries(dataModelo).map(([i, modelo]) => (
            <Form.Group className="mb-3" key={i}>
                <Form.Control placeholder={`${modelo["CodMaeVivienda"]}`} disabled />
            </Form.Group>
        ))
        : null;


    return (
        <div>
            {object.uFisica !== "" &&
                <div className='container-modelos'>
                    {modelo}
                </div>
            }
        </div>
    )
}

export default Modelos