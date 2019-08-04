import React from 'react'

import {Film} from '../Film/Film'
import styles from './Films.module.scss'

export const Films = ({films = []}) => {
  if (films.length === 0) {
    return (
      <div>
        No se encontró ninguna película con ese nombre.
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {films.map((film) => {
        return (
          <Film
            key={film.id}
            film={film}
          />
        )
      })}
    </div>
  )
}
