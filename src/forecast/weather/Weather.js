import React from 'react'
import IconWind from '../../shared/IconWind'

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
  sunset,
  cloudiness,
  pressure,
  pressureUnit
 } }) => (
   <div>
     <div>
       {name}, {country}
     </div>
     <div>
       {temperature}
     </div>
     <div>
       <span>Min {temperatureMin}</span>
       <span>Max {temperatureMax}</span>
     </div>
     <div>
       <div>
         {weatherMain}
       </div>
       <div>
         {weatherDescription}
       </div>
       <div>
         {weatherIcon}
       </div>
     </div>
     <div>
        Updated as of {updatedTime}
     </div>
     <div>
        Wind {windDegree} {windSpeed} <IconWind degree={windDegree} />
     </div>
     <div>
        Visibility {visibility}
     </div>
     <div>
        Humidity {humidity}
     </div>
     <div>
        Sunrise {sunrise}
     </div>
     <div>
        Sunset {sunset}
     </div>
     <div>
        Cloudiness {cloudiness}
     </div>
     <div>
        Pressure {pressure}
     </div>
     <div>
        Pressure unit {pressureUnit}
     </div>
   </div>
  )

export default Weather
