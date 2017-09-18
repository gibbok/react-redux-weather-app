// @flow
import getIconClassName from './weatherIcons'

describe('getIconClassName', () => {
  it('it should return a className day for weather-icons', () => {
    expect(getIconClassName(200)).toBe('wi wi-day-storm-showers')
  })

  it('it should return a className night for weather-icons', () => {
    expect(getIconClassName(900)).toBe('wi wi-tornado')
  })
})
