import { combineReducers } from 'redux'
import locationFinderReducer from '../locationFinder/locationFinderReducer'
import navigationReducer from '../navigation/navigationReducer'

const rootReducer = combineReducers({
  locationFinderReducer,
  navigationReducer
})

export default rootReducer
