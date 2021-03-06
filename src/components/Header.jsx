import React from 'react'
import Card from './Card'
import IpForm from './IpForm'

const Header = ({ ipInfo }) => {
  return (
    <div className="header">
      <h2 className="header-title">IP Tracker</h2>
      <IpForm />
      <Card ipInfo={ipInfo} />
    </div>
  )
}

export default Header
