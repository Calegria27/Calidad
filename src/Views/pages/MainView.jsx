import React, { useContext } from 'react'
import { Authcontext } from '../../Auth/context/Authcontext';






const MainView = () => {
  
  const {user}=useContext(Authcontext);
      
  return (
    <div>
      <div className='container' style={{ display: 'flex', justifyContent: 'left' }} >
        <h2>Usuario: {user}</h2>
      </div>
          

     

    </div>

  )
}

export default MainView