import { useState } from 'react'
import GetIpInfo from '../services/GetIpInfo'
import useLocalStorage from './useLocalStorage'
const useGetIpInfo = () => {
  const [query, setQuery] = useState({
    isLoading: false,
    data: null,
    error: null,
  })
  const [coordinates, setCoordinates] = useState({})
  const { setLocalStorage } = useLocalStorage()

  function saveOnLocalStorage(data) {
    const newHistory = {
      id: Date.now(),
      address: data.ip,
      location: data.city,
    }
    setLocalStorage('history', newHistory)
  }

  function hasBogon(res) {
    if (res.hasOwnProperty('bogon')) {
      const error = { name: 'bogon' }
      setQuery((prev) => ({ ...prev, isLoading: false, error }))
    }
  }
  function hasCoordinate(res) {
    if (res.hasOwnProperty('loc')) {
      const { city, ip, loc } = res
      const ubicacionString = loc.toString().split(',')
      const ubicacionNumber = ubicacionString.map((el) => Number(el))
      const [latitud, longitud] = ubicacionNumber
      setQuery((prev) => ({ ...prev, isLoading: false, data: res }))
      setCoordinates({ latitud, longitud })
      saveOnLocalStorage({ ip, city })
    }
  }
  function getIpData(ip) {
    setQuery({ data: null, error: null, isLoading: true })
    GetIpInfo(ip)
      .then((res) => {
        hasBogon(res)
        hasCoordinate(res)
      })
      .catch(() => {
        setQuery((prev) => ({ ...prev, isLoading: false, error: 'unknow' }))
      })
  }
  const states = { query, coordinates }
  const handles = {
    getIpData,
  }
  return {
    states,
    handles,
  }
}

export default useGetIpInfo
