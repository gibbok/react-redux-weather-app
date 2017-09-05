import { connect } from 'react-redux'
import Map from './Map'
import { setMapRegion, setMapType } from './mapActions'

const map = state => {
  return state.mapReducer.map.data
}

const getMapRegions = state => {
  return state.mapReducer.map.data.regions
}

const getMapTypes = state => {
  return state.mapReducer.map.data.types
}

const getGeo = state => {
  return state.mapReducer.map.app.geo
}

const mapStateToProps = (state) => {
  return {
    geo: getGeo(state),
    map: map(state),
    regions: getMapRegions(state),
    types: getMapTypes(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRegionsChange: (region) => {
      dispatch(setMapRegion(region))
    },
    onTypesChange: (type) => {
      dispatch(setMapType(type))
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
