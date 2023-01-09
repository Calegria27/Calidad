import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';







const Modelos = (props) => {
    const url = "http://192.168.1.17/user/empresas/obras/sector/ufisica/modelo"
    const [selectedModelo, SetSelectedModelo] = useState("Modelo")
    const [dataModelo, SetDataModelo] = useState("")
    const [selecteduFisica, setSelectedUFisica] = useState("")
    const { object } = props;


    useEffect(() => {
        axios.post(url, { CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector, uFisica: object.uFisica })
            .then((response) => {
                SetDataModelo(response.data)
            });
    }, [object.uFisica ]);

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
            {object.uFisica !== "" &&
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