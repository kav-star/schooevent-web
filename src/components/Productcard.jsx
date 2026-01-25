// components/ProductCard.jsx
export default function ProductCard({ image, title }) {
  return (
    <div className="product-card">
      <img src={image} />
      <p>{title}</p>
    </div>
  );
}
