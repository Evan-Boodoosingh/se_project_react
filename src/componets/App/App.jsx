import { useState } from 'react';
import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <WeatherCard />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
