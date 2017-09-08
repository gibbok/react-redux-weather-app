import {getForecastDaily} from './forecastDailyActions'

describe('forecastDailyActions', () => {
  it('should have a type of GET_FORECAST_DAILY', () => {
    const action = getForecastDaily(5128581)
    expect(action.type).toEqual('GET_FORECAST_DAILY')
    expect(action.payload).toEqual(new Promise(() => {}, () => {}))
  })
})
