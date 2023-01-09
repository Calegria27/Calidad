import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';
import Dropdown_Sectores from './Dropdown_Sectores';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

const Dropdown_Obras = (props) => {
    const { object } = props
    console.log(object)
    const { user } = useContext(Authcontext);
    const url = "http://192.168.1.17/user/empresas/obras"
    const [selectedOptionNameObra, setSelectedOptionNameObra] = useState("Seleccione obra");
    const [selectedObra, setSelectedObra] = useState("");
    const [dataobras, setDataobras] = useState(null);
    const [isVisible, setIsVisible] = useState(object.isVisible);

    const data_Sectores = { CtoEmpresa: object.CtoEmpresa, CtoCodigo: selectedObra, isVisible: isVisible }

    const handleOptionClickObra = (option, name) => {
        console.log(option)
        setSelectedObra(option)
        setSelectedOptionNameObra(name)
        console.log(isVisible)
        if (!isVisible) {
            setIsVisible(!isVisible)
            console.log(isVisible)
        }

    }
    console.log(object.CtoEmpresa, user)
    useEffect(() => {
        axios.post(url, { CtoEmpresa: object.CtoEmpresa, Usu_Cuenta: user })
            .then((response) => {
                setDataobras(response.data)
            });
    }, [object.CtoEmpresa]);

    useEffect(() => {
        setSelectedOptionNameObra("Seleccione Obra")
        setIsVisible(!isVisible)
    }, [object.CtoEmpresa]);

    const obras = dataobras
        ? Object.entries(dataobras).map(([key, value]) => (

            <Dropdown.Item key={key} onClick={() => handleOptionClickObra(dataobras[key]["CtoCodigo"], dataobras[key]["Obras"])}
            >{`${dataobras[key]["CtoCodigo"]}: ${dataobras[key]["Obras"]}`}</Dropdown.Item>
        ))

        : null;

    return (
        <div>
            <div className='dropdown-obras'>
                <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedOptionNameObra}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {obras}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown_Sectores object={data_Sectores} />
            </div>
        </div>
  
    )
}

export default Dropdown_Obras