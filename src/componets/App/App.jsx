import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import "./App.css";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/defaultClothingItems";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCloseAllModals = () => {
    setActiveModal("");
  };

  const handleAddItemSubmit = () => {
    console.log("Item Added");
  };

  const handleViewItem = (item) => {
    setSelectedItem(item);
    setActiveModal("view");
  };

  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);
  return (
    <div className="app">
      <Header
        handleAddClick={() => setActiveModal("create")}
      />
      <Main clothingItems={clothingItems} onViewItem={handleViewItem} />
      <Footer />
      <AddItemModal
        isOpen={activeModal === "create"} //true
        onClose={handleCloseAllModals}
        onSubmit={handleAddItemSubmit}
      />
      <ItemModal
        selectedItem={selectedItem || {}}
        onClose={handleCloseAllModals}
        isOpen={activeModal === "view"}
      />
    </div>
  );
}

export default App;
