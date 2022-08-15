import React from 'react'

import logo from '../../assets/img/logo.svg'

import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="logo" />
    </header>
  )
}

export default React.memo(Header)
