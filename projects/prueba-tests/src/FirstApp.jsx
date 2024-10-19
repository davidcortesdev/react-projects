import './FirstApp.css'
import PropTypes from 'prop-types'

function FirstApp ({title, subtitle, description}) {

    return(
        <>
        <h1 data-testid="test-title"> { title } </h1>
        <h2> { subtitle } </h2>
        <p> { description } </p>
        </>
    )

}

FirstApp.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  }


export default FirstApp;