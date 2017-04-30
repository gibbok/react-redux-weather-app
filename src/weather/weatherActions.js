import 'isomorphic-fetch'
import * as api from '../app/api'
import * as types from './weatherActionTypes'

const getLocation = query => ({
  type: types.GET_LOCATION,
  payload: new Promise((resolve, reject) => {
    fetch(api.weather(query)).then(response => {
      resolve(response.json())
    })
  })
})

export { getLocation }
