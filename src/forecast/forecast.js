import React from 'react'

const Forecast = ({ forecast: {
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
 } }) => (
   <div>
     <div>
       { name }, { country }
     </div>
     <div>
       { temperature }
     </div>
     <div>
       <span>Min { temperatureMin }</span>
       <span>Max { temperatureMax }</span>
     </div>
     <div>
       <div>
         { weatherMain }
       </div>
       <div>
         { weatherDescription }
       </div>
       <div>
         { weatherIcon }
       </div>
     </div>
     <div>
       Updated as of { updatedTime }
     </div>
     <div>
       Visibility { visibility }
     </div>
     <div>
       Humidity { humidity }
     </div>
     <div>
       Sunris {sunrise}
     </div>
     <div>
       Sunset {sunset}
     </div>
   </div>
  )

export default Forecast
