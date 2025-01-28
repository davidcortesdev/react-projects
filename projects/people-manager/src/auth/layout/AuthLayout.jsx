import '../css/AuthLayout.css'
import PropTypes from 'prop-types'

export const AuthLayout = ({children, title = ''}) => {

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};


AuthLayout.propTypes = {
    children: PropTypes.array,
    title: PropTypes.string,
}