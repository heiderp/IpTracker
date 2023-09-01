import React, { useContext } from 'react'
import { IpContext } from '../context/IpContext'
const Card = () => {
  const { states: { query: { data } } } = useContext(IpContext)
  const { region, city, ip } = data

  return (
    <div className='card'>
      <div className='card-container'>
        <div className='header-card-detail'>
          <p>Ip Address</p>
          <p className='header-card-detail-type'>
            {ip}
          </p>
        </div>
        <div className='header-card-detail'>
          <p>Region</p>
          <p className='header-card-detail-type'>
            {region}
          </p>
        </div>
        <div className='header-card-detail'>
          <p>City</p>
          <p className='header-card-detail-type'>
            {city}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
