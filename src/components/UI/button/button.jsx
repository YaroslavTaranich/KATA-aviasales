import styles from './button.module.scss'

function Button({ children, onClick }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
