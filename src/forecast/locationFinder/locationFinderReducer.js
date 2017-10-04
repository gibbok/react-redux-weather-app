// @flow
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
      inputValue: '',
      isFinderOpen: false
    }
  }
}

const updateAppIsFetching = (state:StateType, value:boolean):StateType => {
  return dotProp.set(state, 'locationFinder.app.isFetching', value)
}

const updateData = (state:StateType, action:ActionType):StateType => {
  const locations = action.payload.list.map(({ id, name, sys: { country } }) => ({ id, name, country }))
  return dotProp.set(state, 'locationFinder.data', locations)
}

const updateIsFinderOpen = (state:StateType, action:ActionType):StateType => {
  return dotProp.set(state, 'locationFinder.ui.isFinderOpen', action.payload)
}

const updateUiInputValue = (state:StateType, action:ActionType):StateType => {
  return dotProp.set(state, 'locationFinder.ui.inputValue', action.payload)
}

function locationFinderReducer (state:StateType = initialState, action:ActionType):StateType {
  switch (action.type) {
    case types.GET_LOCATIONS_PENDING:
      return updateAppIsFetching(state, true)

    case types.GET_LOCATIONS_FULFILLED:
      const state1 = updateAppIsFetching(state, false)
      const state2 = updateData(state1, action)
      return state2

    case types.SET_SEARCHVALUE:
      return updateUiInputValue(state, action)

    case types.SET_ISFINDEROPEN:
      return updateIsFinderOpen(state, action)

    default:
      return state
  }
}

export default locationFinderReducer
