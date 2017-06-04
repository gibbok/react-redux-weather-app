import { connect } from 'react-redux'
import MapHOC from './MapHOC'
import store from '../app/store'

let isInitiated = false

const map = (map) => {
  return map
}

// const getMapLocationId = () => {
//   return store.getState().mapReducer.map.app.locationId
// }

const onInit = () => {
  if (isInitiated) {
    return
  }
  isInitiated = true
  // store.dispatch(getWeather(getWeatherLocationId()))
}

const mapStateToProps = (state) => {
  return {
    map: map(state.mapReducer.map.data),
    onInit: onInit()
  }
}

const MapContainer = connect(
  mapStateToProps
)(MapHOC)

export default MapContainer
