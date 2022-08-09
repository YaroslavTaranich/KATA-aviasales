import styles from './checkbox.module.scss'

function Checkbox({ id, children, changeHandler, value }) {
  const htmlFor = `checkbox-${id}`
  return (
    <label htmlFor={htmlFor} className={styles.check}>
      <input className={styles.check__input} type="checkbox" checked={value} onChange={changeHandler} id={htmlFor} />
      <span className={styles.check__box} />
      {children}
    </label>
  )
}
export default Checkbox
