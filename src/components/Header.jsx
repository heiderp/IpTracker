import React from 'react'
import Card from './Card'
import IpForm from './IpForm'

const Header = ({ ipInfo }) => {
  return (
    <div className='header'>
      <h2>IP Tracker</h2>
      <IpForm ipInfo={ipInfo} />
      <Card ipInfo={ipInfo} />
    </div>
  )
}

export default Header
