import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';







const Modelos = (props) => {
    const url = "http://192.168.1.17/user/empresas/obras/sector/ufisica/modelo"
    const [selectedModelo, SetSelectedModelo] = useState("")
    const [dataModelo, SetDataModelo] = useState("")
    const { object } = props;
    const setSelectedValue=object.setSelectedValue;

    useEffect(() => {
        axios.post(url, { CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica })
            .then((response) => {
                SetDataModelo(response.data)
            });
    }, [object.uFisica ]);

    useEffect(() => {
        SetSelectedModelo("")
    }, [object.CtoEmpresa]);

    useEffect(() => {
        SetSelectedModelo("")
    }, [object.CtoCodigo]);

    useEffect(() => {
        SetSelectedModelo("")
    }, [object.Sector]);

    useEffect(() => {
        SetSelectedModelo("")
    }, [object.uFisica]);


    const modelo = dataModelo
        ? Object.entries(dataModelo).map(([key, value]) => (


            <Dropdown.Item key={key} onClick={() => handleOptionModelo(dataModelo[key]["CodMaeVivienda"])}
            >{`${dataModelo[key]["CodMaeVivienda"]}`}</Dropdown.Item>
        ))

        : null;
    const handleOptionModelo = (option) => {
        SetSelectedModelo(option)
        const data={modelo:option,CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica }
        setSelectedValue( data)
    }



    return (
        <div>
            {object.uFisica !== "" &&
                <div>
                    <Dropdown className='dropdown-modelos'>
                        <Dropdown.Toggle>
                            {selectedModelo}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {modelo}
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            }
        </div>
    )
}

export default Modelos