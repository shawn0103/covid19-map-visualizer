import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import { MapDiv } from './Styled/MapDiv'
const style = {
  height: '100%',
  width: '70vw'
}

function Map() {
  return (
    <MapDiv>
      <MapContainer center={[24.423438, 54.426019]} zoom={7} style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
    </MapDiv>
  )
}

export default Map