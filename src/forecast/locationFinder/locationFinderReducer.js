import {StateType, ActionType} from '../../types' // eslint-disable-line no-unused-vars

import dotProp from 'dot-prop-immutable'
import * as types from './locationFinderActionTypes'

const initialState:StateType = {
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

const updateAppIsFetching = (state:StateType, action:ActionType, value:boolean):StateType => {
  return dotProp.set(state, 'locationFinder.app.isFetching', value)
}

const updateData = (state:StateType, action:ActionType):StateType => {
  const locations = action.payload.list.map(({ id, name, sys: { country } }) => ({ id, name, country }))
  return dotProp.set(state, 'locationFinder.data', locations)
}

const updateUiInputValue = (state:StateType, action:ActionType):StateType => {
  return dotProp.set(state, 'locationFinder.ui.inputValue', action.payload)
}

function locationFinderReducer (state:StateType = initialState, action:ActionType):StateType {
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
