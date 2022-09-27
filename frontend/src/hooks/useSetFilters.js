import { useCallback } from 'react'
import { useSearchParams, createSearchParams } from 'react-router-dom'

export const useSetFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  return useCallback(
    (data) => {
      const prevParams = Object.fromEntries(searchParams)
      setSearchParams(createSearchParams({ ...prevParams, ...data }))
    },
    [searchParams, setSearchParams]
  )
}
