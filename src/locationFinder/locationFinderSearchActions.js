import 'isomorphic-fetch'
import * as api from '../app/api'
import * as types from './locationFinderActionTypes'
debugger
const getLocations = query => ({
  type: types.GET_LOCATIONS,
  payload: new Promise((resolve, reject) => {
    fetch(api.find(query)).then(response => {
      resolve(response.json())
    })
  })
})

const setSearchValue = (value) => ({
  type: types.SET_SEARCHVALUE,
  payload: value
})

export { getLocations, setSearchValue }
