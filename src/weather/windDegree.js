import React from 'react'

const WindDegree = (degree) => {
  const style = {
    transform: `rotate(${degree}}deg)`
  }
  return (
    <span style={style} />
  )
}

export default WindDegree
