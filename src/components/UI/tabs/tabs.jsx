import React from 'react'
import PropTypes from 'prop-types'

import styles from './tabs.module.scss'

function Tabs({ tabs, selectedTab, onSelect }) {
  const content = tabs.map((tab) => {
    const classNames = [styles.tabs__tab]
    if (tab.name === selectedTab) classNames.push(styles.active)
    return (
      <button className={classNames.join(' ')} type="button" key={tab.name} onClick={() => onSelect(tab.name)}>
        {tab.label}
      </button>
    )
  })

  return <div className={styles.tabs}>{content}</div>
}

Tabs.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default React.memo(Tabs)
