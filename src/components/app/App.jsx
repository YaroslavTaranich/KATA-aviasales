import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../header/header'
import Layout from '../layout/layout'
import PriceFilter from '../priceFilter/priceFilter'
import TicktsList from '../ticketsList/ticketsList'
import TransfersFrom from '../transfersForm/transfersForm'
import ProgressBar from '../UI/progressBar/progressBar'
import Spinner from '../UI/spinner/spinner'
import ErrorMessage from '../UI/errorMessage/errorMessage'
import { fetchSearchID } from '../../redux/slices/searchIdSlice'
import { fetchTickets } from '../../redux/slices/searchTicketsSlice'
import { filterTickets, sortTickets } from '../../redux/slices/filtredTicketsSlice'

import styles from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const searchID = useSelector((state) => state.searchID)
  const tickets = useSelector((state) => state.tickets)

  useEffect(() => {
    if (!searchID.id) dispatch(fetchSearchID())
    if (searchID.id && !tickets.stop && tickets.status !== 'loading' && tickets.status !== 'failed') {
      dispatch(fetchTickets(searchID.id))
        .then(() => dispatch(filterTickets()))
        .then(() => dispatch(sortTickets()))
    }
  }, [dispatch, searchID.id, tickets])

  return (
    <div className={styles.app}>
      <Header />
      <Layout aside={<TransfersFrom />} asideLabel="Фильтры">
        <PriceFilter />

        {!tickets.stop && searchID.status !== 'error' && tickets.status !== 'failed' && (
          <ProgressBar value={tickets.tickets.length} />
        )}

        {searchID.status === 'loading' && <Spinner />}

        {(searchID.status === 'error' || tickets.status === 'failed') && (
          <ErrorMessage message="Ошибка! Не получается загрузить билеты, попробуйте позднее" />
        )}

        <TicktsList />
      </Layout>
    </div>
  )
}

export default App
