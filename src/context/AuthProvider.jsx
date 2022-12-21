import React, { useReducer } from 'react'
import { Authcontext } from './Authcontext'
import { authReducer } from './authReducer'

const initialState={
    logged:false,
}

export const AuthProvider = ({children}) => {

    const [authstate,dispatch]=useReducer(authReducer, initialState)

  return (
    <Authcontext.Provider value={{ }}>
        {children}
    </Authcontext.Provider>
  )
}
