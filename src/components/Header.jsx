import React from 'react'
import Form from '@components/Form'
import ButtonHistory from './ButtonHistory'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-wrapper-button">
          <ButtonHistory />
        </div>
        <h2 className="header-title">IP Address Tracker</h2>
      </div>
      <Form />
    </div>
  )
}

export default Header
