import { Product } from '../types/Product';
import ProductCard from './ProductCard';


interface CartProps {
  cart: Product[];
  removeFromCart: (uniqueId: string) => void;
  clearCart: () => void;
}

function Cart({ cart, removeFromCart, clearCart }: CartProps) {

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className='container'>
      <h1 className='title'>Shopping Cart</h1>
      {
        cart.length === 0 ? (
          <div className='cart__empty'>Your cart is empty</div>
        ) : (
          <div className="cart__content">
            <p className='cart__count'>
              You have <span>{cart.length}</span> item{cart.length > 1 ? 's' : ''} in your cart with a total price of <span>{totalPrice.toFixed(2)}$</span>
            </p>
            {cart.length > 0 && (
              <button className='cart__clear-btn btn-primary' onClick={clearCart}>
                Clear Cart
              </button>
            )}
            <div className='cart__items'>
              {
                cart.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    removeFromCart={removeFromCart}
                  />
                ))
              }
            </div>
            {cart.length > 0 && (
              <button className='cart__clear-btn btn-primary' onClick={clearCart}>
                Clear Cart
              </button>
            )}
          </div>
        )
      }
    </div>
  )
}

export default Cart;