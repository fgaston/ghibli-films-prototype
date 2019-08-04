import React, {useState, useEffect} from 'react'

import {Search} from './Search/Search'
import {Films} from './Films/Films'
import styles from './App.module.scss'
import {api} from 'utils/api'

export const App = () => {
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
      const {data} = await api.get('/films?fields=id,title,release_date,description')
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
          <Content
            loading={loading}
            error={error}
            films={films}
            searchValue={searchValue}
          />
        </div>
      </div>
    </div>
  )
}

export const getFilteredFilms = (films, searchValue) => {
  return films.filter((film) => {
    return film.title.toLowerCase().indexOf(searchValue) > -1
  })
}

export const Content = ({loading, error, films, searchValue}) => {
  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  } else if (error) {
    return (
      <div>
        Hubo un error al cargar tu peliculas
      </div>
    )
  } else {
    return (
      <Films
        films={getFilteredFilms(films, searchValue)}
      />
    )
  }
}
