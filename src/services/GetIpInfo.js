import axios from 'axios'

const GetIpInfo = async () => {
  try {
    const response = await axios.get('https://ipinfo.io/45.186.145.221?token=e0af27ff7c7ae9')
    return response
  } catch (error) {
    return error
  }
}

export default GetIpInfo
