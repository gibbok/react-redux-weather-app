// @flow
import * as types from './forecastDailyActionTypes'

describe('forecastDailyActionTypes', () => {
  it('should have action named GET_FORECAST_DAILY', () => {
    expect(types.GET_FORECAST_DAILY).toEqual('GET_FORECAST_DAILY')
  })

  it('should have action named GET_FORECAST_DAILY_PENDING', () => {
    expect(types.GET_FORECAST_DAILY_PENDING).toEqual('GET_FORECAST_DAILY_PENDING')
  })

  it('should have action named GET_FORECAST_DAILY_FULFILLED', () => {
    expect(types.GET_FORECAST_DAILY_FULFILLED).toEqual('GET_FORECAST_DAILY_FULFILLED')
  })
})
