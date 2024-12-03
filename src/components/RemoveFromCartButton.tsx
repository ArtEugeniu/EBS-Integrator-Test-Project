import { Product } from '../types/Product';

interface RemoveFromCartButtonProps {
  product: Product;
  removeFromCart: (product: Product) => void;
}

function RemoveFromCartButton({ product, removeFromCart }: RemoveFromCartButtonProps) {
  return (
    <button 
      className='product__remove-btn btn-primary' 
      type='button' 
      onClick={() => removeFromCart(product)}
    >
      Remove from Cart
    </button>
  );
}

export default RemoveFromCartButton;