import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Header from './assets/Pages/Header.jsx'; 
import './assets/Pages/Header.css';
import Hero from './assets/components/Hero.jsx'; 
import Features from './assets/components/Features.jsx';
import HowItWorks from './assets/components/HowItWorks.jsx';
import Footer from './assets/Pages/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>  
    <Hero/>
    <Features/>  
    <HowItWorks/>
    <Footer/>
  </StrictMode>,
);
