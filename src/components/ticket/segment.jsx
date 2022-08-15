import React from 'react'
import PropTypes from 'prop-types'

import styles from './ticket.module.scss'

function addZero(num) {
  return num < 10 ? `0${num}` : `${num}`
}

function getFlightRange(duration, date) {
  const ms = duration * 60 * 1000
  const endDate = Date.parse(date) + ms
  const start = `${addZero(new Date(date).getHours())}:${addZero(new Date(date).getMinutes())}`
  const end = `${addZero(new Date(endDate).getHours())}:${addZero(new Date(endDate).getMinutes())}`
  return `${start} – ${end}`
}

function getFlightDuration(time) {
  const ms = time * 60 * 1000
  const min = new Date(ms).getUTCMinutes()
  const h = new Date(ms).getUTCHours()
  const days = new Date(ms).getUTCDate() - 1
  let duration = ''
  if (days) duration += `${days}д `
  if (h) duration += `${h}ч `
  if (min) duration += `${min}м`
  return duration
}

function getTransfers(stops) {
  let title = 'Без пересадок'
  if (stops.length === 1) title = '1 Пересадка'
  if (stops.length > 1 && stops.length < 5) title = `${stops.length} Пересадки`
  if (stops.length > 4) title = `${stops.length} Пересадкoк`
  const value = stops.join(', ')
  return { title, value }
}

function Segment({ segment }) {
  const transfers = getTransfers(segment.stops)

  return (
    <div className={styles.segment}>
      <div className={styles.segment__item}>
        <span className={styles.segment__title}>{`${segment.origin} – ${segment.destination}`}</span>
        <span className={styles.segment__value}>{getFlightRange(segment.duration, segment.date)}</span>
      </div>
      <div className={styles.segment__item}>
        <span className={styles.segment__title}>В пути</span>
        <span className={styles.segment__value}>{getFlightDuration(segment.duration)}</span>
      </div>
      <div className={styles.segment__item}>
        <span className={styles.segment__title}>{transfers.title}</span>
        <span className={styles.segment__value}>{transfers.value}</span>
      </div>
    </div>
  )
}

Segment.propTypes = {
  segment: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  ).isRequired,
}

export default React.memo(Segment)
