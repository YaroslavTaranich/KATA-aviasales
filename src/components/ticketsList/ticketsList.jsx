import React from 'react'

import Ticket from '../ticket/ticket'

import styles from './ticketsList.module.scss'

function TicktsList({ tickets }) {
  const tiketsList = tickets.map((ticket) => (
    <li key={`${ticket.price}${ticket.carrier}`}>
      <Ticket ticket={ticket} />
    </li>
  ))

  return <ul className={styles.list}>{tiketsList}</ul>
}

export default TicktsList
