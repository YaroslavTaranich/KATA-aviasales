import { useSelector, useDispatch } from 'react-redux'

import Checkbox from '../UI/checkbox/checkbox'

import styles from './transfersForm.module.scss'
import { setTransfersFilters, setAllTransfers } from './transfersFormSlice'

const checkBoxes = [
  { id: 2, name: 'noTransfers', label: 'Без пересадок' },
  { id: 3, name: 'transfer_1', label: '1 пересадка' },
  { id: 4, name: 'transfer_2', label: '2 пересадки' },
  { id: 5, name: 'transfer_3', label: '3 пересадки' },
]

function TransfersFrom() {
  const filtersValues = useSelector((state) => state.transfersFilter)
  const dispatch = useDispatch()

  const transfers = checkBoxes.map((box) => (
    <Checkbox
      id={box.id}
      key={box.name}
      value={filtersValues.transfers[box.name]}
      changeHandler={() => dispatch(setTransfersFilters({ [box.name]: !filtersValues.transfers[box.name] }))}
    >
      {box.label}
    </Checkbox>
  ))

  return (
    <form className={styles.form}>
      <fieldset className={styles.form__field}>
        <legend className={styles.form__legend}>Количество пересадок</legend>
        <Checkbox
          id={1}
          value={filtersValues.all}
          changeHandler={() => dispatch(setAllTransfers({ all: !filtersValues.all }))}
        >
          Все
        </Checkbox>
        {transfers}
      </fieldset>
    </form>
  )
}

export default TransfersFrom
