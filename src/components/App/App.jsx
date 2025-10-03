import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import "./App.css";
import ItemModal from "../ItemModal/ItemModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { defaultClothingItems } from "../../utils/defaultClothingItems";
import { getWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import api from "../../utils/api";
import auth from "../../utils/auth";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LogInModal";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [deleteItem, setDeleteItem] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);

  const handleCloseAllModals = () => {
    setActiveModal("");
  };

  const handleRegisterSubmit = (userData, resetForm) => {
    auth
      .registerUser(
        userData.name,
        userData.avatar,
        userData.email,
        userData.password
      )
      .then((newUser) => {
        // Handle successful registration (e.g., show a success message)
        console.log("User registered:", newUser);
        resetForm();
        handleCloseAllModals();
      })
      .catch(console.error);
  };

  const handleLoginSubmit = (userData, resetForm) => {
    auth
      .loginUser(userData.email, userData.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setToken(data.token);
          console.log("User logged in successfully");
          resetForm();
          handleCloseAllModals();
          // Optionally fetch user data here
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  const handleAddItemSubmit = (item, resetForm) => {
    api
      .addClothingItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseAllModals();
        resetForm();
      })
      .catch(console.error);
  };

  const handleViewItem = (item) => {
    setSelectedItem(item);
    setActiveModal("view");
  };

  const openDeleteModal = (item) => {
    setActiveModal("delete");
    setDeleteItem(item);
  };

  const handleDelete = () => {
    api
      .deleteClothingItem(deleteItem._id)
      .then(() => {
        setClothingItems((cards) =>
          cards.filter((item) => item._id !== deleteItem._id)
        );
        setDeleteItem(null);
        handleCloseAllModals();
      })
      .catch(console.error);
  };

  function handleTempUnitChange() {
    if (currentTempUnit === "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console);
  }, []);

  useEffect(() => {
    api.getClothingItems().then((items) => {
      setClothingItems(items);
    });
  }, []);
  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTempUnit, handleTempUnitChange }}
    >
      <div className="app">
        <Header
          weatherData={weatherData}
          handleAddClick={() => setActiveModal("create")}
          handleRegisterClick={() => setActiveModal("register")}
          handleLoginClick={() => setActiveModal("login")}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                clothingItems={clothingItems}
                onViewItem={handleViewItem}
                weatherData={weatherData}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                clothingItems={clothingItems}
                onViewItem={handleViewItem}
                handleAddClick={() => setActiveModal("create")}
              />
            }
          ></Route>
          ``{" "}
        </Routes>
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
          onDeleteClick={openDeleteModal}
        />
        <DeleteModal
          isOpen={activeModal === "delete"}
          onClose={handleCloseAllModals}
          handleDelete={handleDelete}
        />
        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={handleCloseAllModals}
          onSubmit={handleRegisterSubmit}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          onClose={handleCloseAllModals}
          onSubmit={handleLoginSubmit}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
