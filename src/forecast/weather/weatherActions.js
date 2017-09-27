// @flow
import {ActionType} from '../../types' // eslint-disable-line no-unused-vars
import 'isomorphic-fetch'
import * as api from '../../app/api'
import * as types from './weatherActionTypes'

const getWeather = (query:number):ActionType => ({
  type: types.GET_WEATHER,
  payload: new Promise((resolve, reject) => {
    fetch(api.weather(query)).then(response => {
      resolve(response.json())
    })
  })
})

export { getWeather }
