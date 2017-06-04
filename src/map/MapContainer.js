import { connect } from 'react-redux'
import Map from './Map'
// import store from '../app/store'

const map = (map) => {
  return map
}

const mapStateToProps = (state) => {
  return {
    map: map(state.mapReducer.map.data)
  }
}

const MapContainer = connect(
  mapStateToProps
)(Map)

// store.dispatch(getWeather(getWeatherLocationId()))

export default MapContainer
