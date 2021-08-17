import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Api from '../components/Api';

import '../assets/styles/App.scss';
import '../assets/styles/globals.scss';
import '../assets/styles/_reset.scss';


const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <main className="main-container">
        <section className="wrapper">
          <h1>Testing</h1>
          <Api />
        </section>
      </main>
    </div>
  </BrowserRouter>
);

export default App;