import { useState, useEffect } from "react";

export default function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []); // [] means run only once (on mount)

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div>
      <h2>Products List 🛍️</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
