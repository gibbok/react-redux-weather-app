import { combineReducers } from 'redux'
import locationFinderReducer from '../locationFinder/locationFinderReducer'
import navigationReducer from '../navigation/navigationReducer'
import weatherReducer from '../weather/weatherReducer'
import forecastDailyReducer from '../forecastDaily/forecastDailyReducer'
import forecastHourlyReducer from '../forecastHourly/forecastHourlyReducer'

const rootReducer = combineReducers({
  locationFinderReducer,
  navigationReducer,
  weatherReducer,
  forecastDailyReducer,
  forecastHourlyReducer
})

export default rootReducer
