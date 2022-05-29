import IpProvider from './context/IpContext'
import IpTracker from './components/IpTracker'
import './App.css'

function App () {
  return (
    <div className='App'>
      <IpProvider>
        <IpTracker />
      </IpProvider>
    </div>
  )
}

export default App
