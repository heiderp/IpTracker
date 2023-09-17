import React, { createContext, useContext } from 'react'
import useModal from '../hooks/useModal'

const ModalContext = createContext({})

export function ModalProvider({ children }) {
  const modalOptions = useModal()
  return (
    <ModalContext.Provider value={modalOptions}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModalConsumer() {
  return useContext(ModalContext)
}
