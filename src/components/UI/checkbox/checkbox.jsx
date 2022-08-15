import React from 'react'
import PropTypes from 'prop-types'

import styles from './checkbox.module.scss'

function Checkbox({ id, children, changeHandler, value }) {
  const htmlFor = `checkbox-${id}`
  return (
    <label htmlFor={htmlFor} className={styles.check}>
      <input
        className={styles.check__input}
        type="checkbox"
        checked={value}
        onChange={() => changeHandler(id, value)}
        id={htmlFor}
      />
      <span className={styles.check__box} />
      {children}
    </label>
  )
}

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
}

export default React.memo(Checkbox)
