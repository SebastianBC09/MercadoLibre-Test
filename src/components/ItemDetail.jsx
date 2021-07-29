import React from 'react';
import Picture from '../assets/static/images/iPod_Touch.jpg';
import '../assets/styles/ItemDetail.scss';

const ItemDetail = () => (
  <section className="product-container">
    <section className="product-image">
      <img src={Picture} alt="Apple Ipod Touch" />
    </section>
    <section className="product-info">
      <h3 className="product-sales">Nuevo - 234 vendidos</h3>
      <h2 className="product-title">Deco Reverse Sombrero Oxford</h2>
      <h1 className="product-price">$1.980</h1>
      <section className="purchase-btn">
        <button type="button">Comprar</button>
      </section>
    </section>
    <section className="product-description">
      <h1 className="desc-title">Descripción del Producto</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum ac arcu et mattis. Mauris eget feugiat mi. Mauris eget augue eu magna sollicitudin feugiat. Sed auctor nulla dui, molestie finibus velit malesuada lobortis. Nullam molestie, nisl eu placerat facilisis, mi magna venenatis elit, id pulvinar dui nibh at felis. Ut mollis orci id placerat mattis. Cras bibendum lorem non aliquam porttitor.</p>
    </section>
  </section>
);

export default ItemDetail;