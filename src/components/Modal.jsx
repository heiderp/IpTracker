import { Children } from 'react'

export default function Modal({ title = '', onClose, children }) {
  const elements = Children.toArray(children)
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className='modal-close' onClick={onClose}>X</button>
        </div>
        <div className="modal-content">{elements}</div>
      </div>
    </div>
  )
}
