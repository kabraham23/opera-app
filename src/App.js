import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
