const url = 'http://api.openweathermap.org/data/2.5/'
const key = '9f585babc59bf435c42319b4e9b69766'

export const find = query => `${url}find?q=${query}&APPID=${key}`