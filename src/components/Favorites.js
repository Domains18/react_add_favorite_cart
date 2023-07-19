import React, { useState } from 'react'
import '../index.css'





const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter(
      (favoriteProduct) => favoriteProduct.id !== productId
    );

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    window.location.reload(); // Refresh the page to update the displayed favorites
  };
  

  console.log(favorites);
  return (
    <>
      <h1>Favorites</h1>
      <div className='favorites'>
        {
          favorites.map((favorite, index) => (
            <div key={index} className='card'>
              <img src={favorite.image} alt={favorite.name} />
              <div className="card-body">
                <h2>{favorite.id}</h2>
                <h3>{favorite.name}</h3>
                <p>{favorite.description}</p>
                <p>{favorite.price}</p>
                <div className="buttons">
                  <button onClick={()=> removeFromFavorites(favorite.id)}>Remove from Favorites</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Favorites