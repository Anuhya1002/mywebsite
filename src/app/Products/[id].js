import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as ReactBootStrap from "react-bootstrap";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  // Fetch product data by ID
  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setProduct(json))
        .catch((err) => console.error("Failed to fetch product:", err));
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container">
        <ReactBootStrap.Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container">
      <Link href="/"><a>Back to Home</a></Link>
      <div className="product-details">
        <img src={product.image} alt={product.title} className="product-image" />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>Price: ${product.price}</h2>
        <p>Rating: {product.rating.rate}</p>
      </div>
    </div>
  );
}
