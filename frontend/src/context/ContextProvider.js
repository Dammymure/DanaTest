import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

export const ContextProvider = ({ children }) => {

 const [token, setToken] = useState()

 return(
  <StateContext.Provider
  value={{
   token,
   setToken
  }}
  >
   {children}
  </StateContext.Provider>
 )
}

export const useStateContext = () => useContext(StateContext)