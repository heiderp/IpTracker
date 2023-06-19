import { useState } from 'react'
import GetIpInfo from '../services/GetIpInfo'
const useGetIpInfo = () => {
  const [query, setQuery] = useState({
    isLoading: false,
    data: null,
    error: null
  })
  const [coordinates, setCoordinates] = useState({})
  function hasBogon(res) {
    if (res.hasOwnProperty('bogon')) {
      const error = { name: 'bogon' }
      setQuery(prev => ({ ...prev, isLoading: false, error }))
    }
  }
  function hasCoordinate(res) {
    if (
      res.hasOwnProperty('loc')
    ) {
      const ubicacionString = res.loc.toString().split(',')
      const ubicacionNumber = ubicacionString.map((el) => Number(el))
      const [latitud, longitud] = ubicacionNumber
      setQuery(prev => ({ ...prev, isLoading: false, data: res }))
      setCoordinates({ latitud, longitud })
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
        setQuery(prev => ({ ...prev, isLoading: false, error: 'unknow' }))
      })
  }
  const states = { query, coordinates }
  const handles = {
    getIpData
  }
  return {
    states,
    handles
  }
}

export default useGetIpInfo
