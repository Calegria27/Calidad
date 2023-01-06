import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios'









const MainView = () => {

  const { user } = useContext(Authcontext);
  const empresasurl="http://192.168.1.17/user/empresas" 
  const [dataempresas, setDataempresas] = useState(null);


  useEffect(() => {
    axios.post(empresasurl, {}, {params: {item: user,}})
      .then((response) => {
        setDataempresas(response.data);
        console.log(response.data)
      });
  }, []);

  const empresas = dataempresas
  ? Object.entries(dataempresas).map(([key, value]) => (
      
      <Dropdown.Item key={key}>{`${dataempresas[key]["empCodigo"]}: ${dataempresas[key]["empNombre"]}}`}</Dropdown.Item>
    ))
    
  : null;

  return (
    <div>
      <div className="container" style={{ display: "flex", justifyContent: "left" }}>
        <h2>Usuario: {user}</h2>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle  variant="success" id="dropdown-basic">
            Seleccione empresa
          </Dropdown.Toggle>

          <Dropdown.Menu>
                { empresas}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
        <Dropdown.Toggle  variant="success" id="dropdown-basic">
          Seleccione empresa
        </Dropdown.Toggle>

        <Dropdown.Menu>
               { empresas}
        </Dropdown.Menu>
      </Dropdown>
      </div>
     
      
    </div>
  );
};

export default MainView;




