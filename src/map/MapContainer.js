import { connect } from 'react-redux'
import Map from './Map'
// import store from '../app/store'

const map = (map) => {
  return map
}

const getRegions = (regions) => {
  return regions
}

const getTypes = (types) => {
  return types
}

const geo = state => {
  return state.mapReducer.map.app.geo
}

const mapStateToProps = (state) => {
  return {
    geo: geo(state),
    map: map(state.mapReducer.map.data),
    regions: getRegions(state.mapReducer.map.data.regions),
    types: getTypes(state.mapReducer.map.data.types)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRegionsChange: (navigation) => {
      console.log('onRegionsChange')
    },
    onTypesChange: (navigation) => {
      console.log('onTypesChange')
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

// store.dispatch(getWeather(getWeatherLocationId()))

export default MapContainer
