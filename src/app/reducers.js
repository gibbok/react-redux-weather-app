import { combineReducers } from 'redux'
import locationFinderReducer from '../locationFinder/locationFinderReducer'
import navigationReducer from '../navigation/navigationReducer'
import weatherReducer from '../weather/weatherReducer'

const rootReducer = combineReducers({
  locationFinderReducer,
  navigationReducer,
  weatherReducer
})

export default rootReducer
