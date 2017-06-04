import {apiUrl, apiKey, apiMapTemperature} from './config'

export const find = query => `${apiUrl}find?q=${query}&APPID=${apiKey}`

export const weather = id => `${apiUrl}weather?id=${id}&APPID=${apiKey}`

export const forecastDaily = id => `${apiUrl}forecast/daily?id=${id}&APPID=${apiKey}`

export const forecast = id => `${apiUrl}forecast?id=${id}&APPID=${apiKey}`

export const mapTemperature = () => `${apiMapTemperature}?APPID=${apiKey}`
