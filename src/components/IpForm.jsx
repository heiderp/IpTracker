import React, { useEffect, useState } from 'react'

const IpForm = ({ ipInfo }) => {
  const [ipSelected, setIpSelected] = useState('')
  const [inputError, setInputError] = useState('')
  const handleChange = data => {
    const inputData = data.target.value
    if (!isNaN(inputData)) {
      setIpSelected(inputData)
    }
    setInputError('Deben ser numeros')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    inputError !== '' && setTimeout(() => setInputError(''), 8000)
  }, [inputError])
  return (
    <>
      <form className='header-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='header-form-input'
          value={ipSelected}
          placeholder='ej. 8.8.8.8'
          onChange={(e) => handleChange(e)}
        />
        <button type='submit' className='header-form-submit'>Buscar</button>
      </form>
      <div className='header-form-error'>{inputError}</div>
    </>
  )
}

export default IpForm
