import React, { useContext } from 'react'
import { IpContext } from '../context/IpContext'
const Card = () => {
  const { states: { query } } = useContext(IpContext)
  const { data } = query
  const { region, city, ip } = data
  return (
    <div className="header-card">
      <div className="header-card-detail">
        <p>Ip Address</p>
        <p className="header-card-detail-type">
          {ip}
        </p>
      </div>
      <div className="header-card-detail">
        <p>Region</p>
        <p className="header-card-detail-type">
          {region}
        </p>
      </div>
      <div className="header-card-detail">
        <p>City</p>
        <p className="header-card-detail-type">
          {city}
        </p>
      </div>
    </div>
  )
}

export default Card
