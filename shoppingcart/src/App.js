import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, updateProduct } from './actions';

const App = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (product, quantity) => {
    dispatch(updateQuantity(product, quantity));
  };

  const handleUpdateProduct = (productId, updatedProduct) => {
    dispatch(updateProduct(productId, updatedProduct));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={() => handleUpdateProduct(product.id, { name: 'Updated price', price: 50 })}>
              Update Product
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart:</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item, e.target.value)}
            />
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
