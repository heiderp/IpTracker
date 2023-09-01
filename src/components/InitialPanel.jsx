import MapIcon from '@assets/icons/map-search-svgrepo-com.svg'
const InitialPanel = () => {
  return (
    <div className='init_panel'>
      <img src={MapIcon} alt="no-map-seter" className="init_panel-image" />
      <p className='init_panel-subtitle'>Preparado para su busqueda</p>
    </div>
  )
}

export default InitialPanel
