import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';
import Dropdown_cartilla from '../../ui/components/Dropdown_cartilla';
import Dropdown_Empresas from '../../ui/components/Dropdown_Empresas';
import Table_Checklist from '../../ui/components/Table_Checklist';




const MainView = () => {

  const { user } = useContext(Authcontext);
  const [selectedValue, setSelectedValue] = useState('');
  const [finalSelectedValue, setFinalSelectedValue] = useState('');
  console.log(finalSelectedValue)
  




  return (
    <div>
      <div className="container-tittle" style={{ justifyContent: "left" }}>
        <h2>Usuario: {user}</h2>
      </div>
      <Dropdown_Empresas setSelectedValue={setSelectedValue} />
      {selectedValue !== ""
        &&
        <div>
          <h2>SELECCIONE CARTILLAS CONTROL DE CALIDAD</h2>
          <div>
            <Dropdown_cartilla object={selectedValue} setFinalSelectedValue={setFinalSelectedValue}/>
          </div>
        </div>

      }
      {finalSelectedValue!==""&&
        <div>
          <h2>DETALLE CHECKLIST CONTROL CALIDAD</h2>
          <Table_Checklist/>
        </div>
      }
    </div>
  );
};

export default MainView;




