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
  it('create find api endpoint', () => {
    expect(find('brno')).toEqual(`${apiUrl}find?q=brno&APPID=${apiKey}`)
  })

  it('create weather api endpoint', () => {
    expect(weather(5128581)).toEqual(`${apiUrl}weather?id=5128581&APPID=${apiKey}&units=metric`)
  })

  it('create forecastDaily api endpoint', () => {
    expect(forecastDaily(5128581)).toEqual(`${apiUrl}forecast/daily?id=5128581&APPID=${apiKey}&units=metric`)
  })

  it('create forecast api endpoint', () => {
    expect(forecast(5128581)).toEqual(`${apiUrl}forecast?id=5128581&APPID=${apiKey}&units=metric`)
  })

  it('create mapTemperature api endpoint', () => {
    expect(mapTemperature()).toEqual(`${apiMapTemperature}?APPID=${apiKey}`)
  })

  it('create mapPrecipitation api endpoint', () => {
    expect(mapPrecipitation()).toEqual(`${apiMapPrecipitation}?APPID=${apiKey}`)
  })

  it('create mapPressure api endpoint', () => {
    expect(mapPressure()).toEqual(`${apiMapPressure}?APPID=${apiKey}`)
  })

  it('create mapPressure api endpoint', () => {
    expect(mapWind()).toEqual(`${apiMapWind}?APPID=${apiKey}`)
  })

  it('create mapCloud api endpoint', () => {
    expect(mapCloud()).toEqual(`${apiMapCoulds}?APPID=${apiKey}`)
  })
})
