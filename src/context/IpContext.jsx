import React, { createContext, useState } from 'react'

const IpProvider = ({ children }) => {
  const [ipFound, setIpFound] = useState('8.8.8.8')
  const updateIp = data => setIpFound(data)
  return (
    <IpContext.Provider value={{ ipFound, updateIp }}>{children}</IpContext.Provider>
  )
}

export const IpContext = createContext()
export default IpProvider
