// @flow
import location from './location'

describe('location', () => {
  it('should return location object', () => {
    expect(location()).toEqual(expect.objectContaining({
      locationId: expect.any(Number),
      geo: expect.any(Array),
      isFetching: expect.any(Boolean)
    }))
  })
})
