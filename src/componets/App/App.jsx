import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AddItemModal from '../AddItemModal/AddItemModal';
import './App.css';

import { defaultClothingItems } from '../../utils/defaultClothingItems';
function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");

const handleCloseAllModals = () => {setActiveModal("")}

const handleAddItemSubmit = () => { console.log("Item Added") }

  return (
    <div className='app'>
      <Header handleAddClick={() => setActiveModal("create")} />
      <Main clothingItems={clothingItems} />
      <Footer />
    <AddItemModal
        isOpen={activeModal === "create"}
        onClose={handleCloseAllModals}
        onSubmit={handleAddItemSubmit} />
      </div>
  );
}

export default App;
