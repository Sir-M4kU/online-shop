import { AddToCartIcon, RemoveFromCartIcon } from './icons.jsx'
import { useCart } from '../hooks/use-cart-context.js'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <div className='products'>
      {
        products?.map((product) => {
          const isProductInCart = checkProductInCart(product)
          const handleClick = () => {
            return isProductInCart
              ? removeFromCart(product)
              : addToCart(product)
          }
          return (
            <div key={product.id} className='product'>
              <figure>
                <img
                  src={product.thumbnail}
                  alt={`This image corresponds to a/an ${product.title}`}
                />
              </figure>
              <div className='product-info'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className='product-price'>
                  <span>Price: ${product.price}</span>
                  <button className={isProductInCart ? 'remove-from-cart' : 'add-to-cart'} onClick={handleClick}>
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
