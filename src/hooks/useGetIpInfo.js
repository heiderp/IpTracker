import { useEffect, useState } from 'react'
import GetIpInfo from '../services/GetIpInfo'
const useGetIpInfo = () => {
  const [loading, setLoading] = useState(true)
  const [ipInfo, setIpInfo] = useState({})
  const [coordinates, setCoordinates] = useState({})

  useEffect(() => {
    GetIpInfo()
      .then(res => {
        console.log()
        const ubicacionString = res.data.loc.toString().split(',')
        const ubicacionNumber = ubicacionString.map(el => Number(el))
        setLoading(!loading)
        setIpInfo(res.data)
        setCoordinates({ lat: ubicacionNumber[0], lon: ubicacionNumber[1] })
      })
      .catch(error => console.log(error))
  }, [])
  return { loading, ipInfo, coordinates }
}

export default useGetIpInfo
