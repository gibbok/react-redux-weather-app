import { connect } from 'react-redux'
import LocationFinderSearch from './locationFinderSearch'
import { getLocations, setSearchValue } from './locationFinderSearchActions'

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.locationFinderReducer.locationFinder.ui.inputValue
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
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
