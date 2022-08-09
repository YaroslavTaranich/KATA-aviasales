import styles from './ticket.module.scss'

function addZero(num) {
  return num < 10 ? `0${num}` : `${num}`
}

function getFlightRange(duration, date) {
  const ms = duration * 60 * 1000
  const endDate = new Date(date).getMilliseconds() + ms
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

function Route({ route }) {
  const transfers = getTransfers(route.stops)

  return (
    <div className={styles.route}>
      <div className={styles.route__item}>
        <span className={styles.route__title}>{`${route.origin} – ${route.destination}`}</span>
        <span className={styles.route__value}>{getFlightRange(route.duration, route.date)}</span>
      </div>
      <div className={styles.route__item}>
        <span className={styles.route__title}>В пути</span>
        <span className={styles.route__value}>{getFlightDuration(route.duration)}</span>
      </div>
      <div className={styles.route__item}>
        <span className={styles.route__title}>{transfers.title}</span>
        <span className={styles.route__value}>{transfers.value}</span>
      </div>
    </div>
  )
}

function Ticket({ ticket }) {
  const routes = ticket.segments.map((seg) => <Route route={seg} key={seg.date} />)

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
      {routes}
    </div>
  )
}

export default Ticket
