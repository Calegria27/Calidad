import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios'









const MainView = () => {

  const { user } = useContext(Authcontext);
  const empresasurl = "http://192.168.1.17/user/empresas"
  const obrasurl="http://192.168.1.17/user/empresas/obras"
  const [dataempresas, setDataempresas] = useState(null);
  const [dataobras, setDataobras] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Seleccione empresa");
  const [selectedOptionName, setSelectedOptionName] = useState("Seleccione empresa");
  const [selectedOptionNameObra, setSelectedOptionNameObra] = useState("Seleccione obra");


  useEffect(() => {
    axios.post(empresasurl, {}, { params: { item: user, } })
      .then((response) => {
        setDataempresas(response.data);
      });
  }, []);

  useEffect(() => {
    const data={Usu_Cuenta:user,CtoEmpresa:selectedOption}
    console.log(data)
    axios.post(obrasurl, data)
      .then((response) => {
        setDataobras(response.data)
      });
  }, [selectedOption]);




  const handleOptionClick = (option,name) => {
    console.log(option)
    setSelectedOption(option)
    setSelectedOptionName(name)
  }


  const handleOptionClickObra= (option,name) => {
    console.log(option)
    setSelectedOption(option)
    setSelectedOptionNameObra(name)
  }


  const empresas = dataempresas
    ? Object.entries(dataempresas).map(([key, value]) => (

      <Dropdown.Item key={key}  onClick={() => handleOptionClick(dataempresas[key]["empCodigo"],dataempresas[key]["empNombre"])}
      >{`${dataempresas[key]["empCodigo"]}: ${dataempresas[key]["empNombre"]}}`}</Dropdown.Item>
    ))

    : null;

    const obras = dataobras
    ? Object.entries(dataobras).map(([key, value]) => (

      <Dropdown.Item key={key} onClick={() => handleOptionClickObra(dataobras[key]["CtoCodigo"],dataobras[key]["Obras"])}
      >{`${dataobras[key]["CtoCodigo"]}: ${dataobras[key]["Obras"]}}`}</Dropdown.Item>
    ))

    : null;


  return (
    <div>
      <div className="container" style={{ justifyContent: "left" }}>
        <h2>Usuario: {user}</h2>
      </div>
      <div className='container-dropdown'style={{display: "inline-block"}}>
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


    </div>
  );
};

export default MainView;




