import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AddItemModal from '../AddItemModal/AddItemModal';
import './App.css';

import { defaultClothingItems } from '../../utils/defaultClothingItems';
import AddItemModal from '../AddItemModal/AddItemModal';
function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");


  return (
    <div className='app'>
      <Header />
      <Main clothingItems={clothingItems} />
      <Footer />
    <AddItemModal
        isOpen={isAddItemModalOpen}
        onClose={handleCloseAddItemModal}
        onSubmit={handleAddItemSubmit} />
      </div>
  );
}

export default App;
