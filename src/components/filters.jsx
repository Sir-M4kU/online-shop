import { useFilters } from '../hooks/use-filters.js'
import { FilterIcon } from './icons.jsx'
import { useId } from 'react'

export function Filters () {
  const categories = ['all', 'smartphones', 'laptops', 'fragrances', 'skincare']
  const { filters, handleChange } = useFilters()
  const priceId = useId()
  const categoryId = useId()

  return (
    <>
      <div className='filters'>
        <section className='filter'>
          <label htmlFor={priceId}>Filter by Price:</label>
          <input
            type='range'
            onChange={handleChange}
            name='price'
            max={1999}
            defaultValue={filters.price}
            id={priceId}
          />
          <span>${filters.price}</span>
        </section>
        <section className='filter'>
          <label htmlFor={categoryId}>Filter by category:</label>
          <select onChange={handleChange} name='category' defaultValue={filters.category} id={categoryId}>
            {
              categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))
            }
          </select>
        </section>
      </div>
      <div className='filters-mobile'>
        <button>
          <FilterIcon />
          Filters
        </button>
      </div>
    </>
  )
}
