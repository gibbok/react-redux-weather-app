export const createMomentId = timeInMs => {
  var moment = new Date(timeInMs)
  let day = moment.getUTCDay()
  let date = moment.getUTCDate()
  let month = moment.getUTCMonth()
  let year = moment.getUTCFullYear()
  return `${year}:${month}:${date}:${day}`
}
