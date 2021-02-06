import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from './components/Shared/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';

export default function App() {

  return (
    <Router>
      <Navbar />
      <Home />
      <Footer />
    </Router>
  )
} 