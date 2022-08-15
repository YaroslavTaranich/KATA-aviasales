import React from 'react'
import PropTypes from 'prop-types'

import Segment from './segment'
import styles from './ticket.module.scss'

function Ticket({ ticket }) {
  const segments = ticket.segments.map((seg) => <Segment segment={seg} key={seg.date} />)

  return (
    <div className={styles.ticket}>
      <header className={styles.header}>
        <div className={styles.price}>{ticket.price.toLocaleString('ru-RU')} Р</div>
        <img
          src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt={`${ticket.carrier} logo`}
          className={styles.logo}
        />
      </header>
      {segments}
    </div>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.arrayOf(PropTypes.string)]))
    ),
  }).isRequired,
}

export default React.memo(Ticket)
