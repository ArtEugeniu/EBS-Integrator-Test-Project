import { Product } from '../types/Product';

interface AddToCardButtonProps {
  product: Product;
  addToCart: (product: Product) => void;
}

function AddToCardButton({product, addToCart}: AddToCardButtonProps) {
  return (
    <button className='product__add-btn' type='button' onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  )
}

export default AddToCardButton;