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
  it('creates api url find', () => {
    expect(find('brno')).toEqual(`${apiUrl}find?q=brno&APPID=${apiKey}`)
  })

  it('creates api url weather', () => {
    expect(weather(5128581)).toEqual(`${apiUrl}weather?id=5128581&APPID=${apiKey}&units=metric`)
  })

  it('creates api url forecastDaily', () => {
    expect(forecastDaily(5128581)).toEqual(`${apiUrl}forecast/daily?id=5128581&APPID=${apiKey}&units=metric`)
  })

  it('creates api url forecast', () => {
    expect(forecast(5128581)).toEqual(`${apiUrl}forecast?id=5128581&APPID=${apiKey}&units=metric`)
  })

  it('creates api url mapTemperature', () => {
    expect(mapTemperature()).toEqual(`${apiMapTemperature}?APPID=${apiKey}`)
  })

  it('creates api url mapPrecipitation', () => {
    expect(mapPrecipitation()).toEqual(`${apiMapPrecipitation}?APPID=${apiKey}`)
  })

  it('creates api url mapPressure', () => {
    expect(mapPressure()).toEqual(`${apiMapPressure}?APPID=${apiKey}`)
  })

  it('creates api url mapPressure', () => {
    expect(mapWind()).toEqual(`${apiMapWind}?APPID=${apiKey}`)
  })

  it('creates api url mapCloud', () => {
    expect(mapCloud()).toEqual(`${apiMapCoulds}?APPID=${apiKey}`)
  })
})
