import React, { useContext } from 'react'
import { IpContext } from '../context/IpContext'
import LoaderPanel from './LoaderPanel'
import Header from './Header'
import ErrorPanel from './ErrorPanel'
import MapPanel from './MapPanel'
import InitialPanel from './InitialPanel'
const IpTracker = () => {
  const { states: { query } } = useContext(IpContext)
  const { data, isLoading, error } = query

  return (
    <div>
      <Header />
      {error && <ErrorPanel />}
      {isLoading && <LoaderPanel />}
      {!data && !error && <InitialPanel />}
      {data && <MapPanel />}
    </div>
  )
}

export default IpTracker
