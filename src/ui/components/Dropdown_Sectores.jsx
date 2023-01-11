import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  Dropdown  from 'react-bootstrap/Dropdown'
import Dropdown_UnidadesFisicas from './Dropdown_UnidadesFisicas';


const Dropdown_Sectores = (props) => {
    const {object}=props
    const url="http://192.168.1.17/user/empresas/obras/sector"
    const [datasectores, setDataSectores] = useState(null);
    const [selectedSector, setSelectedSector] = useState("")

    const handleOptionClickSector = (option) => {
        setSelectedSector(option)
      }

    useEffect(() => {
        axios.post(url, { CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo })
          .then((response) => {
            setDataSectores(response.data)
          })
      }, [object.CtoCodigo])

    useEffect(() => {
        setSelectedSector("")
    }, [object.CtoEmpresa]);

    useEffect(() => {
        setSelectedSector("")
    }, [object.CtoCodigo]);

    
      const sectores = datasectores
    ? Object.entries(datasectores).map(([key, value]) => (

      <Dropdown.Item key={key} onClick={() => handleOptionClickSector(datasectores[key]["Sector"])}
      >{`${datasectores[key]["Sector"]}`}</Dropdown.Item>
    ))

    : null;

    
   const data_Ufisicas= {CtoEmpresa: object.CtoEmpresa, CtoCodigo: object.CtoCodigo, Sector: selectedSector.toString(),setSelectedValue:object.setSelectedValue}
    return (
        <div>
            {object.isVisible &&
                <div className='container-sectores'>
                    <p>Sector:</p>
                    <Dropdown className='dropdown-sectores'>
                        <Dropdown.Toggle>
                            {selectedSector}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {sectores}
                        </Dropdown.Menu>
                    </Dropdown>
                   <Dropdown_UnidadesFisicas object={data_Ufisicas} />
                </div>
 
            }
        </div>
    )
}

export default Dropdown_Sectores