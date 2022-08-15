import PropTypes from 'prop-types'

import styles from './errorMessage.module.scss'

function ErrorMessage({ message }) {
  return <div className={styles.error}>{message}</div>
}

ErrorMessage.defaultProps = {
  message: 'Произошла ошибка! Повторите действие позднее!',
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

export default ErrorMessage
