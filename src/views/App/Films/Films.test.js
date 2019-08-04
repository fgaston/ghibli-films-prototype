import React from 'react'
import {shallow} from 'enzyme'

import {Films} from './Films'
import {Film} from '../Film/Film'

describe('#Films', () => {
  it('should show empty state', () => {
    const emptyFilms = (
      <div>
        No se encontró ninguna película con ese nombre.
      </div>
    )

    const wrapper = shallow(<Films films={[]} />)

    expect(wrapper).toContainReact(emptyFilms)
  })

  it('should show the films list', () => {
    const films = [{
      id: '1',
      title: 'Aladdin'
    }, {
      id: '2',
      title: 'The lion king'
    }]

    const wrapper = shallow(<Films films={films} />)

    expect(wrapper.find(Film)).toExist()
    expect(wrapper.find(Film).length).toEqual(2)
  })
})
