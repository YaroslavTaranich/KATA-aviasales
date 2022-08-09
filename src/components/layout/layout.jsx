import styles from './layout.module.scss'

function Layout({ aside, children }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.layout__aside}>{aside}</aside>
      <section className={styles.layout__tickets}>{children}</section>
    </div>
  )
}

export default Layout
