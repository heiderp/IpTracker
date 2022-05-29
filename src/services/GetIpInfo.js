import axios from 'axios'

const GetIpInfo = async (ip) => {
  try {
    const url = `https://ipinfo.io/${ip}?token=e0af27ff7c7ae9`
    const response = await axios.get(url)
    return response
  } catch (error) {
    return error
  }
}

export default GetIpInfo
