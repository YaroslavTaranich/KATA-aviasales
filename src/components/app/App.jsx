import Header from '../header/header'
import Layout from '../layout/layout'
import PriceFilter from '../priceFilter/priceFilter'
import TicktsList from '../ticketsList/ticketsList'
import TransfersFrom from '../transfersForm/transfersForm'
import Button from '../UI/button/button'

import styles from './App.module.scss'

const tickets = [
  {
    price: 9441350,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2022-09-13T22:43:05.252Z',
        duration: 1082,
        stops: ['DEL', 'DEL'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2023-06-24T21:52:33.137Z',
        duration: 1243,
        stops: ['DEL', 'JNB', 'DXB'],
      },
    ],
  },
  {
    price: 70650,
    carrier: 'W6',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2022-07-29T21:06:46.490Z',
        duration: 1202,
        stops: ['IST', 'DXB'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2023-01-17T11:41:27.073Z',
        duration: 726,
        stops: [],
      },
    ],
  },
  {
    price: 21400,
    carrier: 'UT',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2022-12-04T06:35:35.957Z',
        duration: 989,
        stops: ['JNB'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2023-06-20T14:39:19.744Z',
        duration: 843,
        stops: [],
      },
    ],
  },
  {
    price: 89230,
    carrier: 'AK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2022-10-04T17:58:55.944Z',
        duration: 644,
        stops: [],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2023-04-30T08:01:29.299Z',
        duration: 923,
        stops: ['JNB'],
      },
    ],
  },
  {
    price: 25160,
    carrier: 'UT',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2023-05-05T06:45:29.183Z',
        duration: 1401,
        stops: ['IST', 'DXB', 'DOH'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2023-05-08T19:10:58.511Z',
        duration: 785,
        stops: [],
      },
    ],
  },
]

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Layout aside={<TransfersFrom />}>
        <PriceFilter />
        <TicktsList tickets={tickets} />
        <Button>Показать еще 5 билетов!</Button>
      </Layout>
    </div>
  )
}

export default App
