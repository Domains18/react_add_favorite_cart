import React, { useState, useEffect } from 'react';
import image from '../assets/item.jpg';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    image: `${image}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel od',
  },
  {
    id: 2,
    name: 'Product 2', 
    price: 100,
    image: `${image}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel od',
  }
];

const Home = () => {
  const [favorites, setFavorites] = useState(() => {
    const jsonValue = localStorage.getItem('favorites');
    if (jsonValue !== null) return JSON.parse(jsonValue);
    return [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
    console.log(favorites);
  };

  //TODO Add cart functionality
  const [cart, setCart] = useState(()=>{
    const jsonValue = localStorage.getItem('cart');
    if(jsonValue !== null) return JSON.parse(jsonValue);
    return [];
  });
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart);
  };
  return (
    <>
      <div className="shop">
        <div className="item">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="card-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <div className="buttons">
                  <button onClick={() => handleCart(product)} >Add to cart</button>
                  <button onClick={() => handleFavorite(product)}>Mark as favorite</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
