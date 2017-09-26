// @flow
import {ActionType} from '../../types' // eslint-disable-line no-unused-vars

import 'isomorphic-fetch'
import * as api from '../../app/api'
import * as types from './forecastHourlyActionTypes'

const getForecastHourly:ActionType = (query:number):ActionType => ({
  type: types.GET_FORECAST_HOURLY,
  payload: new Promise((resolve, reject) => {
    fetch(api.forecast(query)).then(response => {
      resolve(response.json())
    })
  })
})

const setForecastHourlyActiveReportType:ActionType = (type:string):ActionType => ({
  type: types.SET_FORECAST_HOURLY_ACTIVE_REPORT_TYPE,
  payload: type
})

export { getForecastHourly, setForecastHourlyActiveReportType }
