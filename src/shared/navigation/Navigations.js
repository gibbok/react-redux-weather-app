// @flow
import * as React from 'react'
import Navigation from './Navigation'

/* eslint-disable no-undef */
type PropsType = {
  +navigations: Array<{
    +id:string,
    +isActive:boolean,
    +title:string,
    +tooltip:string,
    +url:string
  }>,
  +onNavigationClick: Function,
}
/* eslint-enable no-undef */

const Navigations:React.StatelessFunctionalComponent<any> = ({ navigations, onNavigationClick }:PropsType):React.Element<any> => {
  return (
    <div>
      {navigations.map((navigation, index) =>
        <Navigation
          key={index}
          {...navigations[index]}
          onClick={() => onNavigationClick(navigation)}
      />
    )}
    </div>
  )
}

export default Navigations
