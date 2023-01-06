import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios'









const MainView = () => {

  const { user } = useContext(Authcontext);
  const empresasurl = "http://192.168.1.17/user/empresas"
  const obrasurl = "http://192.168.1.17/user/empresas/obras"
  const sectorurl = "http://192.168.1.17/user/empresas/obras/sector"
  const Ufisicaurl = "http://192.168.1.17/user/empresas/obras/sector/ufisica"
  const [dataempresas, setDataempresas] = useState(null);
  const [dataobras, setDataobras] = useState(null);
  const [datasectores, setDataSectores] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Seleccione empresa");
  const [selectedOptionO, setSelectedOptionO] = useState("");
  const [selectedOptionName, setSelectedOptionName] = useState("Seleccione empresa");
  const [selectedOptionNameObra, setSelectedOptionNameObra] = useState("Seleccione obra");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSector, setSelectedSector] = useState("")
  const [selecteduFisica,setSelectedUFisica]=useState("")


  useEffect(() => {
    axios.post(empresasurl, {}, { params: { item: user, } })
      .then((response) => {
        setDataempresas(response.data);
      });
  }, []);

  useEffect(() => {
    const data = { Usu_Cuenta: user, CtoEmpresa: selectedOption }
    axios.post(obrasurl, data)
      .then((response) => {
        setDataobras(response.data)
      });
  }, [selectedOption]);


  useEffect(() => {
    const data = { CtoEmpresa: selectedOption, CtoCodigo: selectedOptionO }
    axios.post(sectorurl, data)
      .then((response) => {
        setDataSectores(response.data)
      })
  }, [selectedOptionO])

  useEffect(()=>{
    const data ={CtoEmpresa: selectedOption, CtoCodigo: selectedOptionO, Sector:selectedSector}
    axios.post(Ufisicaurl,data)
    .then((response)=>{
      console.log(response)
    }
   )
  }, [selectedSector])


  const handleOptionClick = (option, name) => {
    setSelectedOption(option)
    setSelectedOptionName(name)
    if (isVisible) {
      setIsVisible(!isVisible)
    }
  }


  const handleOptionClickObra = (option, name) => {
    console.log(option)
    setSelectedOptionO(option)
    setSelectedOptionNameObra(name)
    if (!isVisible) {
      setIsVisible(!isVisible)
    }

  }

  const handleOptionClickSector = (option) => {
    setSelectedSector(option)
  }

  const empresas = dataempresas
    ? Object.entries(dataempresas).map(([key, value]) => (

      <Dropdown.Item key={key} onClick={() => handleOptionClick(dataempresas[key]["empCodigo"], dataempresas[key]["empNombre"])}
      >{`${dataempresas[key]["empCodigo"]}: ${dataempresas[key]["empNombre"]}`}</Dropdown.Item>
    ))

    : null;

  const obras = dataobras
    ? Object.entries(dataobras).map(([key, value]) => (

      <Dropdown.Item key={key} onClick={() => handleOptionClickObra(dataobras[key]["CtoCodigo"], dataobras[key]["Obras"])}
      >{`${dataobras[key]["CtoCodigo"]}: ${dataobras[key]["Obras"]}`}</Dropdown.Item>
    ))

    : null;

  const sectores = datasectores
    ? Object.entries(datasectores).map(([key, value]) => (

      <Dropdown.Item key={key} onClick={() => handleOptionClickSector(datasectores[key]["Sector"])}
      >{`${datasectores[key]["Sector"]}`}</Dropdown.Item>
    ))

    : null;

  return (
    <div>
      <div className="container" style={{ justifyContent: "left" }}>
        <h2>Usuario: {user}</h2>
      </div>
      <div className='container-dropdown' style={{ display: "inline-block" }}>
        <Dropdown>
          <Dropdown.Toggle title={selectedOption} variant="success" id="dropdown-basic">
            {selectedOptionName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {empresas}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedOptionNameObra}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {obras}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {isVisible &&
        <div className='containerapear'>
          <Dropdown>
            <Dropdown.Toggle>
              {selectedSector}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {sectores}
            </Dropdown.Menu>
          </Dropdown>
          { selectedSector!==""&&
            <div className='containerapear'>
              <Dropdown>
                <Dropdown.Toggle>
                  {selectedSector}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {sectores}
                </Dropdown.Menu>
              </Dropdown>
            </div>

          }
        </div>

      }




    </div>
  );
};

export default MainView;




