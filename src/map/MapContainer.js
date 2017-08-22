import { connect } from 'react-redux'
import Map from './Map'
import { setRegion, setType } from './mapActions'

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
      debugger
      console.log('onRegionsChange')
      dispatch(setRegion(region))
    },
    onTypesChange: (type) => {
      debugger
      console.log('onTypesChange')
      dispatch(setType(type))
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
