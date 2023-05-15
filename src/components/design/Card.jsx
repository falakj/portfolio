import React from 'react';
import './card.scss';

const Card = () => {
  return (
    <div className="card-container">

      <div className="card">
        
        <img src="assets/fots.svg" alt='' />

        <h2>Card 1</h2>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <button className="card-button">Demo</button>

      </div>



      <div className="card">
       
        <img src="assets/fots.svg" alt='' />
        
        <h2>Card 2</h2>
       
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       
        <button className="card-button">Demo</button>

      </div>




      <div className="card">

        <img src="assets/fots.svg" alt='' />

        <h2>Card 3</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <button className="card-button">Demo</button>

      </div>



    </div>
  );
}

export default Card;
