import React from 'react'

import styles from './Search.module.scss'

export const Search = (props) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder='Buscar película'
        {...props}
      />
    </div>
  )
}
