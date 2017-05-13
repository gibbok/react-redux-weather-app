import { combineReducers } from 'redux'
import locationFinderReducer from '../locationFinder/locationFinderReducer'
import navigationReducer from '../navigation/navigationReducer'
import weatherReducer from '../weather/weatherReducer'
import forecastReducer from '../forecast/forecastReducer'

const rootReducer = combineReducers({
  locationFinderReducer,
  navigationReducer,
  weatherReducer,
  forecastReducer
})

export default rootReducer
