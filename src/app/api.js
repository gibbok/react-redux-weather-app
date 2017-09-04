import {apiUrl, apiKey, apiMapTemperature, apiMapPrecipitation, apiMapPressure, apiMapWind, apiMapCoulds} from './config'

export const find = query => `${apiUrl}find?q=${query}&APPID=${apiKey}`

export const weather = id => `${apiUrl}weather?id=${id}&APPID=${apiKey}`

export const forecastDaily = id => `${apiUrl}forecast/daily?id=${id}&APPID=${apiKey}`

export const forecast = id => `${apiUrl}forecast?id=${id}&APPID=${apiKey}`

// map related
export const mapTemperature = () => `${apiMapTemperature}?APPID=${apiKey}`

export const mapPrecipitation = () => `${apiMapPrecipitation}?APPID=${apiKey}`

export const mapPressure = () => `${apiMapPressure}?APPID=${apiKey}`

export const mapWind = () => `${apiMapWind}?APPID=${apiKey}`

export const mapCloud = () => `${apiMapCoulds}?APPID=${apiKey}`
