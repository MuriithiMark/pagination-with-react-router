import "./product-card.css";

function ProductCard({ product }) {
  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div className="more-details">
        <span className="title">{product.title}</span>
        <span className="price">${product.price}</span>
        <span className="quantity">{product.stock} in stock</span>
      </div>
    </div>
  );
}

export default ProductCard;
