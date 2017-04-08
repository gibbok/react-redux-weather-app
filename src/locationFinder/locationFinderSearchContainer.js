import { connect } from 'react-redux'
import LocationFinderSearch from './locationFinderSearch'

// const mapStateToProps = (state) => {
//   return {
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationSearchClick: (e) => {
      e.preventDefault();
      console.log('click on search')
    },
    onLocationInputChange: (e) => {
      e.preventDefault();
      console.log('change in input')
    }
  }
}

const LocationFinderSearchContainer = connect(
  // mapStateToProps,
  mapDispatchToProps
)(LocationFinderSearch)

export default LocationFinderSearchContainer
