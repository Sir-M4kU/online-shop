import { Products } from './components/products.jsx'
import { Filters } from './components/filters.jsx'
import { useProducts } from './hooks/use-products.js'
import { useFilters } from './hooks/use-filters.js'
import { Cart } from './components/cart.jsx'
import { CartProvider } from './context/cart-context.jsx'

export default function App () {
  const { products, loading, error } = useProducts()
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <header>
        <h1>Online Shop</h1>
      </header>
      <main>
        {products.length > 0 && <Filters />}
        {loading && <span className='status-msg'>Loading...</span>}
        {!error && <Cart />}
        {error && <span className='status-msg'>An error occurred while receiving the data</span>}
        {products.length > 0 && <Products products={filteredProducts} />}
      </main>
    </CartProvider>
  )
}
