/* eslint-disable no-unused-vars */
/* global  ActionType, StateType, LocationType, ForecastHourlyType */

export type ActionType ={
  +type:string,
  +payload: Object
  }

// type ActionGetForecastDaily={
//   +type:string,
//   +payload: Object
// }

// type ActionFake={
//   +type:string,
//   +payload: Object
// }

export type StateType = {
    +forecastDaily: {
      +data: Array<Object>,
      +app:{
        +locationId: number,
        +isFetching: boolean,
      },
      +ui:{
        +selectedDate:string
      }
    }
  }

export type LocationType = {
  +locationId: number, // nyc usa
  +geo: Array<number>,
  +isFetching: boolean
}

export type ForecastHourlyType =Array<{
  +humidityUnit: '%',
  +humidityValue: number,
  +momentId:string,
  +temp: number,
  +timespan:number,
  +rain: void | number,
  +weatherDescription: string,
  +weatherIconCode: number,
  +windDegree:number,
  +windSpeed:number
}>
  /* eslint-enable no-unused-vars */
