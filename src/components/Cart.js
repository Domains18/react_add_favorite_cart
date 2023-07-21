import React, { useEffect } from 'react'

import '../index.css'

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);

  const removeHandler = (productId) => {
    const updatedCart = cart.filter(
      (cartItem) => cartItem.id !== productId
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  }
  return (
    <div className='cart'>
      <h1>Cart</h1>
      {
        cart.map((cartItem, index) => (
          <div key={index} className='card'>
            <img src={cartItem.image} alt={cartItem.name} />
            <div className="card-body">
              <h2>{cartItem.id}</h2>
              <h3>{cartItem.name}</h3>
              <p>{cartItem.description}</p>
              <p>{cartItem.price}</p>
              <div className="buttons">
                <button onClick={() => removeHandler(cart.id)}>Remove from Cart</button>
              </div>
            </div>
          </div>
        ))
      };
    </div>
  )
}

export default Cart