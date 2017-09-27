// @flow
import {createMomentId} from './utility'

describe('utility', () => {
  it('should create momentId', () => {
    expect(createMomentId(1504811633838)).toEqual('2017:8:7:4')
  })
})
