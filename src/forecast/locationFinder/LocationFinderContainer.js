// @flow
import { connect } from 'react-redux'
import LocationFinder from './LocationFinder'
import { setLocation } from './locationFinderSearchActions'
import type { Dispatch } from 'redux' // eslint-disable-line no-unused-vars

const getLocations = (locations) => {
  return locations
}

const mapStateToProps = (state) => {
  return {
    locations: getLocations(state.locationFinderReducer.locationFinder.data)
  }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch:Dispatch<*>) => {
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
