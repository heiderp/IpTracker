import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import React from 'react'

const Map = ({ coordinates, zoom }) => {
  return (
    <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[coordinates.lat, coordinates.lon]}>
        <Popup>
          There's here.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
