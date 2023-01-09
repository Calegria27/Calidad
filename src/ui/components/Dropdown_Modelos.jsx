import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';







const Modelos = (props) => {
    const url = "http://192.168.1.17/user/empresas/obras/sector/ufisica/modelo"
    const [selectedModelo, SetSelectedModelo] = useState("Modelo")
    const [dataModelo, SetDataModelo] = useState("")
    const { object } = props;
    console.log(object)
    const CtoEmpresa = object.CtoEmpresa
    const CtoCodigo = object.CtoCodigo
    const Sector = object.Sector
    const unidadFisica = object.uFisica

    useEffect(() => {
        axios.post(url, { CtoEmpresa: CtoEmpresa, CtoCodigo: CtoCodigo, Sector: Sector, uFisica: unidadFisica })
            .then((response) => {
                SetDataModelo(response.data)
            });
    }, [unidadFisica]);

    const modelo = dataModelo
        ? Object.entries(dataModelo).map(([key, value]) => (


            <Dropdown.Item key={key} onClick={() => handleOptionModelo(dataModelo[key]["CodMaeVivienda"])}
            >{`${dataModelo[key]["CodMaeVivienda"]}`}</Dropdown.Item>
        ))

        : null;
    const handleOptionModelo = (option) => {
        SetSelectedModelo(option)
    }



    return (
        <div>
            {unidadFisica !== "" &&
                <div>
                    <Dropdown>
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