import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';
import Dropdown_cartilla from '../../ui/components/Dropdown_cartilla';
import Dropdown_Empresas from '../../ui/components/Dropdown_Empresas';
import Table_Checklist from '../../ui/components/Table_Checklist';
import Table from 'react-bootstrap/Table';



const MainView = () => {


  const { user } = useContext(Authcontext);
  const [selectedValue, setSelectedValue] = useState('');
  const [finalSelectedValue, setFinalSelectedValue] = useState('');





  return (
    <div>
      <div className="container-tittle">
        <h2>Usuario: {user}</h2>
      </div>
      <div className="container-dropdowns">
        <Dropdown_Empresas setSelectedValue={setSelectedValue} />
      </div>
      {selectedValue !== ""
        &&
        <Dropdown_cartilla object={selectedValue} setFinalSelectedValue={setFinalSelectedValue} />
      }
      {finalSelectedValue !== "" &&
        <div>
          <div className="tittle-checklist">
            <h2>DETALLE CHECKLIST CONTROL CALIDAD</h2>
          </div>
          <Table_Checklist object={finalSelectedValue} />
        </div>
      }
    </div>
  );
};

export default MainView;




