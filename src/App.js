import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import IntroComponent from './components/IntroComponent';
import Ambassador from './components/Ambassador';
import FooterDetails from './components/FooterDetails';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <IntroComponent />
      <Ambassador />
      <FooterDetails />
      <Footer />
    </div>
  );
}

export default App;
