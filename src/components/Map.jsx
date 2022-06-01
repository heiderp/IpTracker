import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import React, { useEffect, useState } from 'react'
import BoxLoader from './BoxLoader'

const Map = ({ coordinates, zoom }) => {
  const [loadingMap, setloadingMap] = useState(false)
  useEffect(() => {
    setloadingMap(true)
  }, [coordinates])
  useEffect(() => {
    setTimeout(() => setloadingMap(false), 1000)
  }, [loadingMap])
  return (
    <>
      {loadingMap && <BoxLoader />}
      {!loadingMap && <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[coordinates.lat, coordinates.lon]}>
          <Popup>
            There's here.
          </Popup>
        </Marker>
      </MapContainer>}
    </>
  )
}

export default Map
