import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import sinon from 'sinon'
import SummaryButton from './SummaryButton'

describe('<SummaryButton />', () => {
  it('should render', () => {
    const wrapper = shallow(<SummaryButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('should simulate click event', () => {
    const onSummaryClick = sinon.spy()
    let wrapper = shallow(<SummaryButton onSummaryClick={onSummaryClick} />)
    wrapper.find('button').simulate('click')
    expect(onSummaryClick.called).toEqual(true)
  })
})
