import React from 'react'
import {shallow} from 'enzyme'

import {App, Content, getFilteredFilms} from './App'
import {Search} from './Search/Search'
import {Films} from './Films/Films'

describe('#App', () => {
  it('should renders without crashing', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Search)).toExist()
    expect(wrapper.find(Content)).toExist()
  })
})

describe('#getFilteredFilms', () => {
  it('should return empty array', () => {
    const films = [{
      title: 'Aladdin'
    }, {
      title: 'The lion king'
    }]

    const filteredFilms = getFilteredFilms(films, 'Mulan')

    expect(filteredFilms.length).toEqual(0)
  })

  it('should return the filtered films', () => {
    const films = [{
      title: 'Aladdin'
    }, {
      title: 'The lion king'
    }]

    const filteredFilms = getFilteredFilms(films, 'king')

    expect(filteredFilms.length).toEqual(1)
    expect(filteredFilms[0].title).toEqual('The lion king')
  })
})

describe('#Content', () => {
  it('should show loading', () => {
    const loading = (
      <div>
        Loading...
      </div>
    )

    const wrapper = shallow(<Content loading />)

    expect(wrapper).toContainReact(loading)
  })

  it('should show an error', () => {
    const error = (
      <div>
        Hubo un error al cargar tu peliculas
      </div>
    )

    const wrapper = shallow(<Content error />)

    expect(wrapper).toContainReact(error)
  })

  it('should show Films component', () => {
    const wrapper = shallow(<Content films={[]} />)

    expect(wrapper.find(Films)).toExist()
  })
})
