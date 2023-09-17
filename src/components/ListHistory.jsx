import React from 'react'

export default function ListHistory({ history }) {
  return history.map((record) => (
    <div key={record.id} className="history-record">
      <p className='record'>{record.location}</p>
      <p className='record'>{record.address}</p>
    </div>
  ))
}
