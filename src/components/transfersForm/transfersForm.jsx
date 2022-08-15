import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { filterTickets, sortTickets } from '../../redux/slices/filtredTicketsSlice'
import { setTransfersFilters, setAllTransfers } from '../../redux/slices/transfersFormSlice'
import Checkbox from '../UI/checkbox/checkbox'

import styles from './transfersForm.module.scss'

const checkBoxes = [
  { id: 'all', name: 'all', label: 'Все' },
  { id: 0, name: 'noTransfers', label: 'Без пересадок' },
  { id: 1, name: 'transfer_1', label: '1 пересадка' },
  { id: 2, name: 'transfer_2', label: '2 пересадки' },
  { id: 3, name: 'transfer_3', label: '3 пересадки' },
]

function TransfersFrom() {
  const filtersValues = useSelector((state) => state.transfersFilter)
  const isStop = useSelector((state) => state.tickets.stop)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterTickets()).then(() => dispatch(sortTickets()))
  }, [filtersValues, isStop])

  const changeHandler = useCallback(
    (id, value) => {
      dispatch(id === 'all' ? setAllTransfers({ [id]: !value }) : setTransfersFilters({ [id]: !value }))
    },
    [dispatch]
  )

  const transfers = checkBoxes.map((box) => (
    <Checkbox
      id={box.id}
      key={box.name}
      value={box.id === 'all' ? filtersValues.all : filtersValues.transfers[box.id]}
      changeHandler={changeHandler}
    >
      {box.label}
    </Checkbox>
  ))

  return (
    <form className={styles.form}>
      <fieldset className={styles.form__field}>
        <legend className={styles.form__legend}>Количество пересадок</legend>
        {transfers}
      </fieldset>
    </form>
  )
}

export default React.memo(TransfersFrom)
