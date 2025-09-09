import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import "./App.css";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/defaultClothingItems";
import { getWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [weatherData, setWeatherData] = useState({namwe: "", temp: "0"});

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
   getWeatherData()
   .then((data) => {
    setWeatherData(data);
   })
   .catch(console);
  }, []);

  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);
  return (
    <CurrentTemperatureUnitContext.Provider value={"currentTempUnit"}>
    <div className="app">
      <Header
        weatherData={weatherData}
        handleAddClick={() => setActiveModal("create")}
      />
      <Main clothingItems={clothingItems} onViewItem={handleViewItem} weatherData={weatherData} />
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
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
