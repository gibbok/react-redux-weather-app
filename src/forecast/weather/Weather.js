// @flow
import * as React from 'react'
import IconWind from '../../shared/icon/IconWind'
import moment from 'moment'
import IconWeather from '../../shared/icon/IconWeather'

/* eslint-disable no-undef */
type PropsType = {
  +weather:{
    +name: string,
    +country: string,
    +icon: number,
    +temperature: number,
    +temperatureMin: number,
    +temperatureMax: number,
    +weatherMain: number,
    +weatherDescription: string,
    +weatherIcon: number,
    +updatedTime:number,
    +windDegree: number,
    +windSpeed: number,
    +visibility: number,
    +humidity: number,
    +sunrise: number,
    +sunset: number,
    +cloudiness: number,
    +pressure: number,
    +pressureUnit: 'hPa'
}}
/* eslint-enable no-undef */

const Weather:React.StatelessFunctionalComponent<any> = ({ weather: {
  name,
  country,
  icon,
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
 }
}:PropsType):React.Element<any> => {
  const updatedTimeFormat = moment.unix(updatedTime).format('h:mm A')
  const sunriseFormat = moment.unix(sunrise).format('h:mm A')
  const sunsetFormat = moment.unix(sunset).format('h:mm A')
  return (
    <div>
      <div>
        {name}, {country}
      </div>
      <div>
        <IconWeather code={icon} />
      </div>
      <div>
        {temperature}
      </div>
      <div>
        <span>Min {temperatureMin} &#176;</span>
        <span>Max {temperatureMax} &#176;</span>
      </div>
      <div>
        <div>
          {weatherMain}
        </div>
        <div>
          {weatherDescription}
        </div>
      </div>
      <div>
        Updated as of {updatedTimeFormat}
      </div>
      <div>
        Wind {windDegree} {windSpeed} mps <IconWind degree={windDegree} />
      </div>
      <div>
        Visibility {visibility} meter
      </div>
      <div>
        Humidity {humidity} &#37;
      </div>
      <div>
        Sunrise {sunriseFormat}
      </div>
      <div>
        Sunset {sunsetFormat}
      </div>
      <div>
        Cloudiness {cloudiness} &#37;
      </div>
      <div>
        Pressure {pressure} {pressureUnit}
      </div>
    </div>
  )
}

export default Weather
