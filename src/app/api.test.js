// @flow
import {
    apiUrl,
    apiKey,
    apiMapTemperature,
    apiMapPrecipitation,
    apiMapPressure,
    apiMapWind,
    apiMapCoulds
    } from './config'

import {
    find,
    weather,
    forecastDaily,
    forecast,
    mapTemperature,
    mapPrecipitation,
    mapPressure,
    mapWind,
    mapCloud
} from './api'

describe('api', function () {
  it('should create url find', () => {
    expect(find('brno')).toEqual(`${apiUrl}find?q=brno&APPID=${apiKey}`)
  })

  it('should create url weather', () => {
    expect(weather(5128581)).toEqual(`${apiUrl}weather?id=5128581&APPID=${apiKey}&units=metric`)
  })

  it('should create url forecastDaily', () => {
    expect(forecastDaily(5128581)).toEqual(`${apiUrl}forecast/daily?id=5128581&APPID=${apiKey}&units=metric`)
  })

  it('should create url forecast', () => {
    expect(forecast(5128581)).toEqual(`${apiUrl}forecast?id=5128581&APPID=${apiKey}&units=metric`)
  })

  it('should create url mapTemperature', () => {
    expect(mapTemperature()).toEqual(`${apiMapTemperature}?APPID=${apiKey}`)
  })

  it('should create url mapPrecipitation', () => {
    expect(mapPrecipitation()).toEqual(`${apiMapPrecipitation}?APPID=${apiKey}`)
  })

  it('should create url mapPressure', () => {
    expect(mapPressure()).toEqual(`${apiMapPressure}?APPID=${apiKey}`)
  })

  it('should create url mapPressure', () => {
    expect(mapWind()).toEqual(`${apiMapWind}?APPID=${apiKey}`)
  })

  it('should create url mapCloud', () => {
    expect(mapCloud()).toEqual(`${apiMapCoulds}?APPID=${apiKey}`)
  })
})
