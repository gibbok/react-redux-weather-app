// @flow
import { combineReducers } from 'redux'
import locationFinderReducer from '../forecast/locationFinder/locationFinderReducer'
import weatherReducer from '../forecast/weather/weatherReducer'
import forecastDailyReducer from '../forecast/forecastDaily/forecastDailyReducer'
import forecastHourlyReducer from '../forecast/forecastHourly/forecastHourlyReducer'
import mapReducer from '../map/mapReducer'

const rootReducer = combineReducers({
  locationFinderReducer,
  weatherReducer,
  forecastDailyReducer,
  forecastHourlyReducer,
  mapReducer
})

export default rootReducer
