import React from 'react';
import Navbar from '../components/Navbar';
import BackConnect from '../components/BackConnect'

import '../assets/styles/App.scss';
import '../assets/styles/globals.scss';
import '../assets/styles/_reset.scss';

const App = () => (
  <div className="App">
    <Navbar />
    <main className="main-container">
      <h1>Some stuff here</h1>
      <section className="wrapper">
        <BackConnect />
      </section>
    </main>
  </div>
);

export default App;