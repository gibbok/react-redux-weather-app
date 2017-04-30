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
    visibility,
    humidity,
    sunrise,
    sunset
 } }) => (<div>
   { name }, { country }
   { temperature }
   Temperature
   Min { temperatureMin }
   Max { temperatureMax }
   { weatherMain }
   { weatherDescription }
   { weatherIcon }
   Updated as of { updatedTime }
   Wind
   { windDegree }
   { windSpeed }
   Visibility
   { visibility }
   Humidity
   { humidity },
   Sunrise
   {sunrise},
   Sunset
   {sunset}
 </div>
  )

export default Weather
