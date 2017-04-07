import { connect } from 'react-redux'
import LocationFinderSearch from './locationFinderSearch'

// const mapStateToProps = (state) => {
//   return {
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationSearchClick: () => {
      console.log('click search')
    }
  }
}

const LocationFinderSearchContainer = connect(
    // mapStateToProps,
    mapDispatchToProps
)(LocationFinderSearch)

export default LocationFinderSearchContainer
