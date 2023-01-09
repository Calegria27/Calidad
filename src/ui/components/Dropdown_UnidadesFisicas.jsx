import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  Dropdown  from 'react-bootstrap/Dropdown'
import Modelos from './Dropdown_Modelos'

const Dropdown_UnidadesFisicas = (props) => {
    const {object}=props
    console.log(object)
    const url = "http://192.168.1.17/user/empresas/obras/sector/ufisica"
    const [dataUfisica, setDataUfisica] = useState(null);
    const [selecteduFisica, setSelectedUFisica] = useState("")
    console.log(object.Sector)
    

    const handleOptionUfisica = (option) => {
        setSelectedUFisica(option)
        console.log(option)
      }

    const unidadesFisicas = dataUfisica
    ? Object.entries(dataUfisica).map(([key, value]) => (

      <Dropdown.Item key={key} onClick={() => handleOptionUfisica(dataUfisica[key]["unidadfisica"])}
      >{`${dataUfisica[key]["unidadfisica"]}`}</Dropdown.Item>
    ))

    : null;

    useEffect(() => {
        axios.post(url, {CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector})
          .then((response) => {
            console.log(response)
            setDataUfisica(response.data)
          }
          )
      }, [object.Sector])

    const data_fm ={CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: object.Sector,uFisica:selecteduFisica}
    return (
        <div>
            {object.Sector !== "" &&
                <div className='containerapear'>
                    <Dropdown>
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