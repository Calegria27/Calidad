import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  Dropdown  from 'react-bootstrap/Dropdown'
import Modelos from './Dropdown_Modelos'

const Dropdown_UnidadesFisicas = (props) => {
    const {object}=props
    const url = "http://192.168.1.17/user/empresas/obras/sector/ufisica"
    const [dataUfisica, setDataUfisica] = useState(null);
    const [selecteduFisica, setSelectedUFisica] = useState("")
    

    const handleOptionUfisica = (option) => {
        setSelectedUFisica(option)
      }

    const unidadesFisicas = dataUfisica
    ? Object.entries(dataUfisica).map(([key, value]) => (

      <Dropdown.Item style={{height:"30px"}} key={key} onClick={() => handleOptionUfisica(dataUfisica[key]["unidadfisica"])}
      >{`${dataUfisica[key]["unidadfisica"]}`}</Dropdown.Item>
    ))

    : null;

    useEffect(() => {
        axios.post(url, {CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector})
          .then((response) => {
            setDataUfisica(response.data)
          }
          )
      }, [object.Sector])

    useEffect(() => {
        setSelectedUFisica("")
    }, [object.CtoEmpresa]);

    useEffect(() => {
        setSelectedUFisica("")
    }, [object.CtoCodigo]);

    useEffect(() => {
        setSelectedUFisica("")
    }, [object.Sector]);


    const data_fm ={CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector,uFisica:selecteduFisica, setSelectedValue:object.setSelectedValue}
    return (
        <div>
            {object.Sector !== "" &&
                <div className="container-unidades">
                    <p>Unidades:</p>
                    <Dropdown className="dropdown-unidades">
                        <Dropdown.Toggle>
                            {selecteduFisica}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ overflowY: 'scroll', maxHeight: '200px' }}>
                            {unidadesFisicas}
                        </Dropdown.Menu>

                    </Dropdown>
                    <Modelos object={data_fm} />
                </div>

            }
        </div>
    )
}

export default Dropdown_UnidadesFisicas