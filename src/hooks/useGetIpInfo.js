import { useEffect, useState } from 'react'
import GetIpInfo from '../services/GetIpInfo'
const useGetIpInfo = (ip = '8.8.8.8') => {
  const [loading, setLoading] = useState(true)
  const [ipInfo, setIpInfo] = useState({})
  const [coordinates, setCoordinates] = useState({})
  useEffect(() => {
    GetIpInfo(ip)
      .then(res => {
        const ubicacionString = res.data.loc.toString().split(',')
        const ubicacionNumber = ubicacionString.map(el => Number(el))
        setLoading(false)
        setIpInfo(res.data)
        setCoordinates({ lat: ubicacionNumber[0], lon: ubicacionNumber[1] })
      })
      .catch(error => error.response && console.log(error.response.data))
  }, [ip])

  return { loading, ipInfo, coordinates }
}

export default useGetIpInfo
