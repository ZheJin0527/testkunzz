import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ValuesSection from './components/ValuesSection';
import MenuSelectionSection from './components/MenuSelectionSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <MenuSelectionSection />
    </div>
  );
}

export default App;
