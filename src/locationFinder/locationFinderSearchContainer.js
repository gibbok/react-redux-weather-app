import { connect } from 'react-redux'
import LocationFinderSearch from './locationFinderSearch'
import { getLocations, setSearchValue } from './locationFinderSearchActions'
import store from '../app/store'

// const mapStateToProps = (state) => {
//   return {
//   }
// }

const handleInputChange = (e) => {
  e.preventDefault()
  let value = e.target.value
  store.dispatch(setSearchValue(value))
  console.log('change in input')
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationSearchClick: (e) => {
      e.preventDefault()
      let value = store.getState().locationFinderReducer.locationFinder.ui.inputValue
      store.dispatch(getLocations(value))
      console.log('click on search')
    },
    onLocationInputChange: (e) => {
      handleInputChange(e)
    }
  }
}

const LocationFinderSearchContainer = connect(
  // mapStateToProps,
  mapDispatchToProps
)(LocationFinderSearch)

export default LocationFinderSearchContainer
