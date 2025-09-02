import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

import { defaultClothingItems } from '../../utils/defaultClothingItems';
function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  return (
    <div className='app'>
      <Header />
      <Main clothingItems={clothingItems} />
      <Footer />
    </div>
  );
}

export default App;
