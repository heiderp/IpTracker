import useGetIpInfo from './hooks/useGetIpInfo'
import { Map } from './components/Map'
import './App.css'
function App () {
  const { ipInfo, loading, coordinates } = useGetIpInfo()
  /* const coordinates = ipInfo.toSting().toString().split(',') */
  console.log(coordinates)
  return (
    <div className='App'>
      {loading
        ? <>Cargando</>
        : <div>
          <p>{ipInfo.region}</p>
          <p>{ipInfo.city}</p>
          <p>{ipInfo.ip}</p>

          <Map coordinates={coordinates} zoom='15' />
          </div>}
    </div>
  )
}

export default App
