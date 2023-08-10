export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };
  
  export const updateQuantity = (product, quantity) => {
    return {
      type: 'UPDATE_QUANTITY',
      payload: { id: product.id, quantity },
    };
  };
  
  export const updateProduct = (productId, updatedProduct) => {
    return {
      type: 'UPDATE_PRODUCT',
      payload: { id: productId, updatedProduct },
    };
  };

  