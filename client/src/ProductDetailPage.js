import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();

  // Mock product data (You can replace this with real API data later)
  const product = {
    id,
    name: `Product ${id}`,
    description: `This is the description for product ${id}.`,
    price: `$${parseInt(id) * 10}`, // Ensure the price is a number
  };

  return (
    <div>
      <h1>Product Details</h1>
      <p>Details of product with ID: {id}</p>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
