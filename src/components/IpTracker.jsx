import React, { useContext } from 'react'
import { IpContext } from '../context/IpContext'
import useGetIpInfo from '../hooks/useGetIpInfo'
import Header from './Header'
import Map from './Map'
const IpTracker = () => {
  const { ipFound } = useContext(IpContext)
  const { coordinates, ipInfo, loading } = useGetIpInfo(ipFound)
  return (
    <div>
      <Header ipInfo={ipInfo} />
      {!loading && <Map coordinates={coordinates} zoom='15' />}
      {/* */}
    </div>
  )
}

export default IpTracker
