import React, { useContext, lazy, Suspense } from 'react'
import { IpContext } from '../context/IpContext'
import Header from './Header'
import InitialPanel from './InitialPanel'
import ModalHistory from './ModalHistory'
import { ModalProvider } from '../context/ModalContext'

const LoaderPanel = lazy(() => import('./LoaderPanel'))
const ErrorPanel = lazy(() => import('./ErrorPanel'))
const MapPanel = lazy(() => import('./MapPanel'))

const IpTracker = () => {
  const {
    states: { query },
  } = useContext(IpContext)
  const { data, isLoading, error } = query

  return (
    <div>
      <ModalProvider>
        <Header />
        <ModalHistory />
      </ModalProvider>
      {!data && !error && <InitialPanel />}
      <Suspense>
        {error && <ErrorPanel />}
        {isLoading && <LoaderPanel />}
        {data && <MapPanel />}
      </Suspense>
    </div>
  )
}

export default IpTracker
