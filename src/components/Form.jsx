import React from 'react'
import useForm from '../hooks/useForm'
import Input from './Input'
import Button from './Button'

const Form = () => {
  const {
    ipRef,
    isLoading,
    isInvalid,
    handleSubmit
  } = useForm()

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          ref={ipRef}
          placeholder="Ejm. 8.8.8.8"
          isInvalid={isInvalid}
          disabled={isLoading}
        />
        <Button disabled={isLoading}>
          Buscar
        </Button>
      </form>
    </>
  )
}

export default Form
