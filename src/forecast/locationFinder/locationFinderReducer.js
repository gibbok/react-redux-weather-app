import dotProp from 'dot-prop-immutable'
import * as types from './locationFinderActionTypes'

const initialState = {
  locationFinder: {
    data: [
    ],
    app: {
      isFetching: false
    },
    ui: {
      inputValue: ''
    }
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'locationFinder.app.isFetching', value)
}

const updateData = (state, action) => {
  const locations = action.payload.list.map(({ id, name, sys: { country } }) => ({ id, name, country }))
  return dotProp.set(state, 'locationFinder.data', locations)
}

const updateUiInputValue = (state, action) => {
  return dotProp.set(state, 'locationFinder.ui.inputValue', action.payload)
}

function locationFinderReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_LOCATIONS_PENDING:
      return updateAppIsFetching(state, action, true)

    case types.GET_LOCATIONS_FULFILLED:
      return updateData(updateAppIsFetching(state, action, false), action)

    case types.SET_SEARCHVALUE:
      return updateUiInputValue(state, action)
    default:
      return state
  }
}

export default locationFinderReducer
