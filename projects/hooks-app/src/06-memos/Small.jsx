/* eslint-disable react/display-name */
import PropTypes from 'prop-types'
//import { memo } from 'react'
import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Me volví a dibujar.')

  return (
    <small>{ value }</small>
  )
})

Small.propTypes = {
    value: PropTypes.number
}