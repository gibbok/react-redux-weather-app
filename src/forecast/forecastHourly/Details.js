import React from 'react'
// import Detail from './Detail'
import DetailDayGroup from './DetailDayGroup'

/*
 {
  date1: [],
  date2: []
 }
*/

const Details = ({ forecastHourly }) => {
  let result = forecastHourly.reduce((acc, item) => {
    (acc[item.momentId] || (acc[item.momentId] = [])).push(item)
    return acc
  }, {})
  console.log(result)
  return (
    <div>
      {forecastHourly.map((day, index) =>
        <DetailDayGroup
          key={index}
          day={day}
      />
    )}
    </div>
  )
}

// const Details = ({ forecastHourly }) => (
//   <div>
//     <ul>
//       {forecastHourly.map((day, index) =>
//         <Detail
//           key={index}
//           {...forecastHourly[index]}
//       />
//     )}
//     </ul>
//   </div>
// )

export default Details
