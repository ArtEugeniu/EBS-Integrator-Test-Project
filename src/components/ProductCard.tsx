import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  addToCart?: (product: Product) => void;
  removeFromCart?: (uniqueId: string) => void;
}

function ProductCard({ product, addToCart, removeFromCart }: ProductCardProps) {

  return (
    <div className='product__block' key={product.id}>
      <img className='product__image' src={product.image} alt={product.title} />
      <div className="product__info">
        <h2>{product.title}</h2>
        <div className="product__price-btn">
          <p className='product__price'>Price: ${product.price}</p>
          {addToCart && (
            <button
              className='product__add-btn btn-primary'
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
          {removeFromCart && product.uniqueId && (
            <button
              className='product__remove-btn btn-primary'
              onClick={() => removeFromCart(product.uniqueId)}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard;