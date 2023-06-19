import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useContext } from 'react'
import { IpContext } from '../context/IpContext'

const Map = ({ zoom = '15' }) => {
  const { states: { coordinates } } = useContext(IpContext)
  const { latitud, longitud } = coordinates
  const position = [latitud, longitud]

  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>There's here.</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
