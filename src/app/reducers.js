import { combineReducers } from 'redux'
import locationFinderReducer from '../locationFinder/locationFinderReducer'
import navigationReducer from '../navigation/navigationReducer'
import weatherReducer from '../weather/weatherReducer'
import forecastDailyReducer from '../forecastDaily/forecastDailyReducer'

const rootReducer = combineReducers({
  locationFinderReducer,
  navigationReducer,
  weatherReducer,
  forecastDailyReducer
})

export default rootReducer
