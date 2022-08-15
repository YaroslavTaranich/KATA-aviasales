import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../ticket/ticket'
import Button from '../UI/button/button'

import styles from './ticketsList.module.scss'

function TicktsList() {
  const filtredTickets = useSelector((state) => state.filtredTickets)

  const [ticketsOnPage, setTicketsOnPage] = useState(5)

  useEffect(() => {
    if (ticketsOnPage > 5) setTicketsOnPage(5)
  }, [filtredTickets])

  const renderTicketsList = (tickets, count) => {
    const tiketsList = []
    if (!tickets) return tiketsList
    for (let i = 0; i < count; i++) {
      const ticket = tickets[i]
      tiketsList.push(
        <li key={`${ticket.price}${ticket.carrier}${ticket.segments[0].date}`}>
          <Ticket ticket={ticket} />
        </li>
      )
    }
    return tiketsList
  }

  if (!filtredTickets || filtredTickets.length === 0)
    return <div className={styles.noResults}>Рейсов, подходящих под заданные фильтры, не найдено</div>

  return (
    <>
      <ul className={styles.list}>{renderTicketsList(filtredTickets, ticketsOnPage)}</ul>
      <Button onClick={() => setTicketsOnPage(ticketsOnPage + 5)}>Показать еще 5 билетов!</Button>
    </>
  )
}

export default React.memo(TicktsList)
