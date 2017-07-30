import { connect } from 'react-redux'
import Map from './Map'
// import store from '../app/store'

const map = (map) => {
  return map
}

const getRegions = (regions) => {
  return regions
}

const mapStateToProps = (state) => {
  return {
    map: map(state.mapReducer.map.data),
    regions: getRegions(state.mapReducer.map.data.regions)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRegionsChange: (navigation) => {
      console.log('onRegionsChange')
      // dispatch(setActive(navigation.id))
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

// store.dispatch(getWeather(getWeatherLocationId()))

export default MapContainer
