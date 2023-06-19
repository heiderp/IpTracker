import { useContext } from "react"
import { IpContext } from "../context/IpContext"
const messageError = {
  bogon: 'Direccion ip Invalida.'
}
const ErrorPanel = () => {
  const { states: { query } } = useContext(IpContext)
  const { error } = query
  const message = messageError[error.name]

  return (
    <div className='error_panel'>
      {message}
    </div>
  )
}

export default ErrorPanel
