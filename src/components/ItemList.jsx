import React from 'react';
import ItemCard from './ItemCard';
import '../assets/styles/ItemList.scss';

const ItemList = () => (
  <section>
    <ItemCard />
    <hr />
    <ItemCard />
    <hr />
    <ItemCard />
    <hr />
    <ItemCard />
  </section>
)

export default ItemList;