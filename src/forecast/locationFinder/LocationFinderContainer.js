import { connect } from 'react-redux'
import LocationFinder from './LocationFinder'
import { setLocation } from './locationFinderSearchActions'

const getLocations = (locations) => {
  return locations
}

const mapStateToProps = (state) => {
  return {
    locations: getLocations(state.locationFinderReducer.locationFinder.data)
  }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
  return {
    onLocationClick: (location) => {
      dispatch(setLocation(location.id))
    }
  }
}

const LocationFinderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationFinder)

export default LocationFinderContainer
