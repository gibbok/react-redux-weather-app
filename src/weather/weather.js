import React from 'react'

const Weather = ({ weather }) => {
  let {
    name,
    country,
    temperature,
    temperatureMin,
    temperatureMax,
    weatherMain,
    weatherDescription,
    weatherIcon,
    updatedTime,
    windDegree,
    windSpeed,
    visibility
 } = weather
  return (<div>
    { name }, { country }
    { temperature }
    { temperatureMin }
    { temperatureMax }
    { weatherMain }
    { weatherDescription }
    { weatherIcon }
    { updatedTime }
    { windDegree }
    { windSpeed }
    { visibility }
  </div>
  )
}

export default Weather
/*
    { temperature }
    { temperatureMin }
    { temperatureMax }
    { weatherMain }
    { weatherDescription }
    { weatherIcon }
    { updatedTime }
    { windDegree },
    { windSpeed }
    { visibility }
*/
