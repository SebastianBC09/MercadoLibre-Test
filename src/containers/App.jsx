import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ItemList from '../components/ItemList';

import '../assets/styles/App.scss';
import '../assets/styles/globals.scss';
import '../assets/styles/_reset.scss';


const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <main className="main-container">
        <section className="wrapper">
          <ItemList />
        </section>
      </main>
    </div>
  </BrowserRouter>
);

export default App;