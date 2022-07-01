import React, { useContext, useState } from 'react'
import { IpContext } from '../context/IpContext'

const IpForm = ({ ipError }) => {
  const { updateIp } = useContext(IpContext)
  const [ipSelected, setIpSelected] = useState('')

  const handleChange = (data) => {
    const inputData = data.target.value
    setIpSelected(inputData)
  }
  const handelPaste = (e) => {
    const dataPasted = e.clipboardData.getData('text')
    setIpSelected(dataPasted)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    updateIp(ipSelected)
    setIpSelected('')
  }

  return (
    <>
      <form className="header-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="header-form-input"
          value={ipSelected}
          placeholder="Ejm. 8.8.8.8"
          onChange={(e) => handleChange(e)}
          onPaste={(e) => handelPaste(e)}
        />
        <button type="submit" className="header-form-submit">
          Buscar
        </button>
      </form>
    </>
  )
}

export default IpForm
