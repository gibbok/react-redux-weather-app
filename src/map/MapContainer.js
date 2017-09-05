import { connect } from 'react-redux'
import Map from './Map'
import { setMapRegion, setMapType } from './mapActions'

const map = state => {
  return state.mapReducer.map.data
}

const getRegions = state => {
  return state.mapReducer.map.data.regions
}

const getTypes = state => {
  return state.mapReducer.map.data.types
}

const geo = state => {
  return state.mapReducer.map.app.geo
}

const mapStateToProps = (state) => {
  return {
    geo: geo(state),
    map: map(state),
    regions: getRegions(state),
    types: getTypes(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRegionsChange: (region) => {
      console.log('onRegionsChange')
      dispatch(setMapRegion(region))
    },
    onTypesChange: (type) => {
      console.log('onTypesChange')
      dispatch(setMapType(type))
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
