// @flow
import {apiUrl, apiKey, apiMapTemperature, apiMapPrecipitation, apiMapPressure, apiMapWind, apiMapCoulds} from './config'

export const find = (query: string):string => `${apiUrl}find?q=${query}&APPID=${apiKey}`

export const weather = (id: number):string => `${apiUrl}weather?id=${id}&APPID=${apiKey}&units=metric`

export const forecastDaily = (id: number):string => `${apiUrl}forecast/daily?id=${id}&APPID=${apiKey}&units=metric`

export const forecast = (id: number):string => `${apiUrl}forecast?id=${id}&APPID=${apiKey}&units=metric`

export const mapTemperature = ():string => `${apiMapTemperature}?APPID=${apiKey}`

export const mapPrecipitation = ():string => `${apiMapPrecipitation}?APPID=${apiKey}`

export const mapPressure = ():string => `${apiMapPressure}?APPID=${apiKey}`

export const mapWind = ():string => `${apiMapWind}?APPID=${apiKey}`

export const mapCloud = ():string => `${apiMapCoulds}?APPID=${apiKey}`
