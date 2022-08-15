import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './layout.module.scss'
import close from './close.svg'

function Layout({ aside, asideLabel, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const asideClasses = [styles.layout__aside]
  const buttonClasses = [styles.layout__toggle]
  if (isOpen) {
    asideClasses.push(styles['layout__aside--open'])
    buttonClasses.push(styles['layout__toggle--open'])
  }

  return (
    <div className={styles.layout}>
      <button type="button" className={buttonClasses.join(' ')} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <img src={close} alt="close icon" /> : asideLabel}
      </button>
      <aside className={asideClasses.join(' ')}>{aside}</aside>
      <section className={styles.layout__content}>{children}</section>
    </div>
  )
}

Layout.propTypes = {
  asideLabel: PropTypes.string.isRequired,
  aside: PropTypes.element.isRequired,
}

export default Layout
