/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})

Hijo.propTypes = {
    numero: PropTypes.number,
    incrementar: PropTypes.func
}