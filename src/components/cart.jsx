import { useCart } from '../hooks/use-cart-context'
import { CartIcon, ClearCartIcon } from './icons'
import { useId } from 'react'

function CartItem ({ thumbnail, title, price, quantity, addQuantity }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={`This image corresponds to a/an ${title}`}
      />
      <div>
        <span><strong>{title}</strong> - ${price}</span>
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button className='add-quantity' onClick={addQuantity}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartId = useId()
  const { cart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartId} hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                addQuantity={() => addToCart(product)}
                {...product}
              />
            ))
          }
        </ul>
        <button className='delete-cart'>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
