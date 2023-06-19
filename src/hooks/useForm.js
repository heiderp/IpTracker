import React, { useContext, useRef, useState } from 'react'
import { IpContext } from '../context/IpContext'
import regex from '../utils/regExp'

export default function useForm() {
  const { handles: { getIpData } } = useContext(IpContext)
  const { states: { query: { isLoading } } } = useContext(IpContext)
  const ipRef = useRef('')
  const [isInvalid, setIsInvalid] = useState(false)

  function validateIp(ip) {
    const value = ip.trim()
    return regex.test(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsInvalid(false)
    const ipValue = ipRef.current?.value
    if (!validateIp(ipValue)) {
      setIsInvalid(true)
      return
    }
    getIpData(ipValue)
  }

  return ({
    ipRef,
    isInvalid,
    isLoading,
    handleSubmit
  })
}
