import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import React from 'react'

export const Map = ({ coordinates, zoom }) => {
  return (
    <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[coordinates.lat, coordinates.lon]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
