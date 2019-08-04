import React, {useState, useEffect} from 'react'

import {Search} from './Search/Search'
import {Films} from './Films/Films'
import styles from './App.module.scss'
import {api} from 'utils/api'

export const App = () => {
  let content
  const [searchValue, updateSearchValue] = useState('')
  const [films, updateFilms] = useState([])
  const [loading, updateLoading] = useState(true)
  const [error, updateError] = useState()

  useEffect(() => {
    getFilms()
  }, [])

  const getFilms = async () => {
    updateLoading(true)

    try {
      const {data} = await api.get('/films')
      updateFilms(data)
      updateLoading(false)
    } catch (error) {
      updateError(error)
      updateLoading(false)
    }
  }

  const handleChange = ({target: {value}}) => {
    updateSearchValue(value)
  }

  const getFilteredFilms = () => {
    return films.filter((film) => {
      return film.title.toLowerCase().indexOf(searchValue) > -1
    })
  }

  if (loading) {
    content = (
      <div>
        Loading...
      </div>
    )
  } else if (error) {
    content = (
      <div>
        Hubo un error al cargar tu peliculas
      </div>
    )
  } else {
    content = <Films films={getFilteredFilms()} />
  }

  return (
    <div className={styles.App}>
      <div>
        <div className={styles.Search}>
          <Search
            value={searchValue}
            onChange={handleChange}
          />
        </div>

        <hr />

        <div className={styles.Films}>
          {content}
        </div>
      </div>
    </div>
  )
}
