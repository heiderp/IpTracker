import useGetIpInfo from './hooks/useGetIpInfo'
import { Map } from './components/Map'
import './App.css'
import Header from './components/Header'
function App () {
  const { ipInfo, loading, coordinates } = useGetIpInfo()
  console.log(coordinates)
  return (
    <div className='App'>
      {loading && <>Cargando</>}
      {!loading &&
        <div>
          <Header ipInfo={ipInfo} />
          <Map coordinates={coordinates} zoom='15' />
        </div>
      }  
    </div>
  )
}

export default App
