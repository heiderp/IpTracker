import axios from 'axios'

const GetIpInfo = async (ip) => {
  try {
    const token = import.meta.env.VITE_TOKEN
    const url = `https://ipinfo.io/${ip}?token=${token}`
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    return error
  }
}

export default GetIpInfo
