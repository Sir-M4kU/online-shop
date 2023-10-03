import { ProductsContext } from '../context/products-context'
import { useContext } from 'react'

export function useProductsContext () {
  const context = useContext(ProductsContext)

  if (context == null) {
    throw new Error('This hook needs to be used over a ProductsProvider')
  }

  return context
}
