import { useSelector, useDispatch } from 'react-redux'

import Tabs from '../UI/tabs/tabs'
import { CHEAP, FAST, OPTIMAL } from '../../constants'

import { setPriceFilter } from './priceFilterSlice'

const tabs = [
  { name: CHEAP, label: 'Самый дешевый' },
  { name: FAST, label: 'Самый быстрый' },
  { name: OPTIMAL, label: 'Оптимальный' },
]

function PriceFilter() {
  const filter = useSelector((state) => state.priceFilter)
  const dispatch = useDispatch()

  return <Tabs tabs={tabs} selectedTab={filter} onSelect={(v) => dispatch(setPriceFilter(v))} />
}

export default PriceFilter
