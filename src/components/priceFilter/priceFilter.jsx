import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'

import { sortTickets } from '../../redux/slices/filtredTicketsSlice'
import Tabs from '../UI/tabs/tabs'
import { CHEAP, FAST } from '../../constants'
import { setPriceFilter } from '../../redux/slices/priceFilterSlice'

const tabs = [
  { name: CHEAP, label: 'Самый дешевый' },
  { name: FAST, label: 'Самый быстрый' },
]

function PriceFilter() {
  const filter = useSelector((state) => state.priceFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sortTickets())
  }, [filter])

  const changeHandler = useCallback(
    (value) => {
      dispatch(setPriceFilter(value))
    },
    [dispatch]
  )

  return <Tabs tabs={tabs} selectedTab={filter} onSelect={changeHandler} />
}

export default PriceFilter
