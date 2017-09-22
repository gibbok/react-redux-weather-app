/* eslint-disable no-unused-vars */
/* global ActionType, StateType */
export type ActionType ={
    type:string,
    payload: Object
  }

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
  /* eslint-enable no-unused-vars */
