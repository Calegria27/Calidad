import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';
import Dropdown from 'react-bootstrap/Dropdown';
import Dropdown_Obras from './Dropdown_Obras';
import axios from 'axios';


const Dropdown_Empresas = () => {

    const { user } = useContext(Authcontext);
    const url = "http://192.168.1.17/user/empresas"
    const [dataempresas, setDataempresas] = useState(null);
    const [selectedEmpresa, setSelectedEmpresa] = useState("Seleccione empresa");
    const [selectedOptionName, setSelectedOptionName] = useState("Seleccione empresa");
    const [isVisible, setIsVisible] = useState(false);
    const data_Obras= {CtoEmpresa:selectedEmpresa, isVisible:isVisible}

    useEffect(() => {
        axios.post(url, {}, { params: { item: user, } })
            .then((response) => {
                setDataempresas(response.data);
            });
    }, []);

    const handleOptionClick = (option, name) => {
        setSelectedEmpresa(option)
        setSelectedOptionName(name)
        if (isVisible) {
            setIsVisible(!isVisible)
        }
    }
    const empresas = dataempresas
        ? Object.entries(dataempresas).map(([key, value]) => (

            <Dropdown.Item key={key} onClick={() => handleOptionClick(dataempresas[key]["empCodigo"], dataempresas[key]["empNombre"])}
            >{`${dataempresas[key]["empCodigo"]}: ${dataempresas[key]["empNombre"]}`}</Dropdown.Item>
        ))

        : null;




    return (
            <div className='container-dropdown'>
                <Dropdown className='dropdown-empresa'>
                    <Dropdown.Toggle title={selectedEmpresa} variant="success" id="dropdown-basic">
                        {selectedOptionName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {empresas}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown_Obras object={data_Obras} />
            </div>
            

    )
}

export default Dropdown_Empresas