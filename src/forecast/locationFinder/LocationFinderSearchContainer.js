// @flow
import { connect } from 'react-redux'
import LocationFinderSearch from './LocationFinderSearch'
import { getLocations, setSearchValue } from './locationFinderSearchActions'
import type { Dispatch } from 'redux' // eslint-disable-line no-unused-vars

const getInputValue = (state) => {
  return state.locationFinderReducer.locationFinder.ui.inputValue
}

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: getInputValue(state)
  }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch:Dispatch<*>, ownProps) => {
  return {
    onSearchClick: (e, inputValue) => {
      e.preventDefault()
      dispatch(getLocations(inputValue))
    },
    onLocationChange: (e) => {
      e.preventDefault()
      let value = e.target.value
      dispatch(setSearchValue(value))
    }
  }
}

const LocationFinderSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationFinderSearch)

export default LocationFinderSearchContainer
