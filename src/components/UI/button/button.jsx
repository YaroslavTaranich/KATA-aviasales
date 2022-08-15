import PropTypes from 'prop-types'

import styles from './button.module.scss'

function Button({ children, onClick }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button
