import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import sinon from 'sinon'
import DetailsButton from './DetailsButton'

describe('<DetailsButton />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <DetailsButton onClick={() => {}} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should simulate click event', () => {
    const onDetailsClick = sinon.spy()
    let wrapper = shallow(<DetailsButton onDetailsClick={onDetailsClick} />)
    wrapper.find('button').simulate('click')
    expect(onDetailsClick.called).toEqual(true)
  })
})
