import * as actions from './navigationActions'
import * as types from './navigationActionTypes'

describe('actions', () => {
  it('should create action setActive', () => {
    const value = 'map'
    const expectedAction = {
      type: types.SET_ACTIVE,
      payload: value
    }
    expect(actions.setActive(value)).toEqual(expectedAction)
  })
})
