import React from 'react'
import { useModalConsumer } from '../context/ModalContext'
import HistoryIcon from '@assets/icons/timer.svg'
import Tippy from '@tippyjs/react'

export default function ButtonHistory() {
  const { openModal } = useModalConsumer()
  return (
    <Tippy content="Historial" className="tooltip" placement="right">
      <button onClick={openModal} className="header-button">
        <img src={HistoryIcon} className="history-icon" alt="history-icon" />
      </button>
    </Tippy>
  )
}
