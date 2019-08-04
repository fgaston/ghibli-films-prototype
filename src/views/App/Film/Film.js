import React from 'react'

import styles from './Film.module.scss'

export const Film = ({film = {}}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.title}
        >
          {film.title}
        </div>

        <div
          className={styles.date}
        >
          ({film.release_date})
        </div>
      </div>

      <hr />

      <div className={styles.description}>
        {film.description}
      </div>
    </div>
  )
}
