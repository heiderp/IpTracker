import React from 'react'
import Modal from './Modal'
import useHistory from '../hooks/useHistory'
import { useModalConsumer } from '../context/ModalContext'
import ListHistory from './ListHistory'

export default function ModalHistory() {
  const { history, hasRecords } = useHistory()
  const { closeModal, isOpen } = useModalConsumer()
  const historySorted = history.reverse()

  if (!isOpen) {
    return null
  }

  return (
    <Modal title="History" onClose={closeModal}>
      <div className="history">
        {hasRecords ? (
          <ListHistory history={historySorted} />
        ) : (
          <button>Empty</button>
        )}
      </div>
    </Modal>
  )
}
