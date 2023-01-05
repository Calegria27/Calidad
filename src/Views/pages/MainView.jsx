import React, { useContext } from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';
import Dropdown from 'react-bootstrap/Dropdown';







const MainView = () => {

  const { user } = useContext(Authcontext);

  return (
    <div>
      <div className='container' style={{ display: 'flex', justifyContent: 'left' }} >
        <h2>Usuario: {user}</h2>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>



    </div>

  )
}

export default MainView