import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import TestimonialsPage from './components/TestimonialsPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <HomePage />
      <TestimonialsPage />
      <AboutPage />
      <ServicesPage />
  
      <ContactPage />
    </>
  );
};

export default App;
