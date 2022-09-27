import React from 'react'
import { useSetFilters } from '../../hooks/useSetFilters'

export const Search = () => {
  const setFilters = useSetFilters()

  const onChange = ({ target }) => {
    setFilters({ search: target.value })
  }

  return (
    <>
      <input onChange={onChange} name="search" placeholder="Поиск по названию" className="defaultInput" type="text" />
    </>
  )
}
