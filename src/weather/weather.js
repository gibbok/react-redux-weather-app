import React from 'react'

const Weather = ({ weather: {
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
 } }) => {
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
