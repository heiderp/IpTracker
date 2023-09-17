import React from 'react'
import useForm from '@hooks/useForm'
import Input from '@components/InputWithContext'
import Button from '@components/Button'
import { FormProvider } from 'react-hook-form'

const Form = () => {
  const {
    formContext,
    handleForm,
    isLoading,
    isDirty,
    isValid
  } = useForm()

  return (
    <FormProvider {...formContext} >
      <form className="form" onSubmit={handleForm}>
        <Input
          name='ip'
          placeholder="Ejm. 8.8.8.8"
          disabled={isLoading}
        />
        <Button disabled={!isDirty || !isValid || isLoading}>
          Buscar
        </Button>
      </form>
    </FormProvider>
  )
}

export default Form
