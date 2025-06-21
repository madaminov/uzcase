import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.min.css';
import './css/bootstrap-icons.css';
import './css/index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main class="main">
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </main>
  </React.StrictMode>
);
