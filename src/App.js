import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Media from './components/Media.js';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div className="navLinks">
          <Link to="/" className="NavLinkButton">Home</Link>
          <Link to="/about" className="NavLinkButton">About</Link>
          <Link to="/media" className="NavLinkButton">Media</Link>
          <Link to="/contact" className="NavLinkButton">Contact</Link>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/media' component={Media} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

