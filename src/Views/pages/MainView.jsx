import React, { useContext} from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';
import Dropdown_Empresas from '../../ui/components/Dropdown_Empresas';





const MainView = () => {

  const { user } = useContext(Authcontext);

  return (
    <div style={{width: 1000}}>
      <div className="container-tittle" style={{ justifyContent: "left" }}>
        <h2>Usuario: {user}</h2>
      </div>
      <Dropdown_Empresas />
    </div>
  );
};

export default MainView;




