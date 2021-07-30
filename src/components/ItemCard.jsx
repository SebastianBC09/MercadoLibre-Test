import React from 'react';
import Picture from '../assets/static/images/iPod_Touch.jpg';
import '../assets/styles/ItemCard.scss';

const ItemCard = () => (
  <section className="item-container">
    <section className="item-image">
      <img src={Picture} alt="Apple Ipod Touch" />
    </section>
    <section className="item-info">
      <h1 className="product-price">$1.980</h1>
      <p className="product-info">Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!</p>
    </section>
    <section className="item-location">
      <h2 className="product-location">Capital Federal</h2>
    </section>
  </section>
);

export default ItemCard;