import { useContext } from 'react'
import { IpContext } from '../context/IpContext'
import regex from '../utils/regExp'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ipSchema = z.object({
  ip: z.string().regex(regex, { message: 'Invalida direccion ip.' }).min(1)
})

export default function useIpForm() {
  const { handles: { getIpData } } = useContext(IpContext)
  const { states: { query: { isLoading } } } = useContext(IpContext)
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isDirty, isValid }
  } = useForm({
    defaultValues: { ip: '' },
    reValidateMode: 'onChange',
    mode: 'onTouched',
    resolver: zodResolver(ipSchema)
  })

  const handleSeachIp = (data) => {
    const value = data.ip
    getIpData(value)
    reset()
  }

  const handleForm = handleSubmit(handleSeachIp)

  const formContext = {
    register,
    errors,
    isDirty,
    isValid
  }

  return {
    register,
    errors,
    isLoading,
    handleForm,
    formContext,
    isDirty,
    isValid
  }
}
