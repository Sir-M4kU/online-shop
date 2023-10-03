import { useEffect, useState } from 'react'
import { fetchProducts, fetchProductsCategories } from '../services/products'

export function useProducts () {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchProducts()
      .then(products => {
        setProducts(products)
      })
      .catch(err => {
        console.error(err)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchProductsCategories()
      .then(setCategories)
      .catch(err => console.error(err))
  }, [])

  return { products, categories, loading, error }
}
