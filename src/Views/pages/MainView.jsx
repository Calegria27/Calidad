import React from 'react'

const MainView = () => {
  return (
    <div>
      <div className='container' style={{ display: 'flex', justifyContent: 'center' }} >
        <h1>Vista principal</h1>
      </div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">Action</button>
          <button class="dropdown-item" type="button">Another action</button>
          <button class="dropdown-item" type="button">Something else here</button>
        </div>
      </div>
        

     

    </div>

  )
}

export default MainView