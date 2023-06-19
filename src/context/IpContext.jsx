import React, { createContext, useState } from 'react'
import useGetIpInfo from '../hooks/useGetIpInfo'

const IpProvider = ({ children }) => {
  const [ip, setIp] = useState(null)
  const updateIp = (data) => setIp(data)
  const { states, handles } = useGetIpInfo()

  const globalState = {
    states: { ...states, ip },
    handles: { ...handles, updateIp }
  }

  return (
    <IpContext.Provider value={globalState}>
      {children}
    </IpContext.Provider>
  )
}

export const IpContext = createContext()
export default IpProvider
