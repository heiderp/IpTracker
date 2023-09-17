import React from 'react'
import Form from '@components/Form'
import { useModalConsumer } from '../context/ModalContext'
import HistoryIcon from '@assets/icons/timer.svg'

const Header = () => {
  const { openModal } = useModalConsumer()
  return (
    <div className="header">
      <div className="header-content">
        <button onClick={openModal} className="header-button">
          <img src={HistoryIcon} alt="history-icon" />
        </button>
        <h2 className="header-title">IP Address Tracker</h2>
      </div>
      <Form />
    </div>
  )
}

export default Header
