import PropTypes from 'prop-types'

import styles from './progressBar.module.scss'

function ProgressBar({ value, maxValue }) {
  const width = `${Math.floor((value / maxValue) * 100)}%`

  const barStyle = { width }

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div className={styles.progress__bar} style={barStyle} />
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  maxValue: 10000,
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number,
}

export default ProgressBar
