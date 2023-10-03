import { useContext } from 'react'
import { FiltersContext } from '../context/filters-context'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const handleChange = (e) => setFilters(prevState => ({
    ...prevState,
    [e.target.name]: e.target.value
  }))

  const filterProducts = (products) => {
    return products.filter(product => (
      product.price >= filters.price &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    ))
  }

  return { filters, filterProducts, handleChange }
}
