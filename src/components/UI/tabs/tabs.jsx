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

export default Tabs
