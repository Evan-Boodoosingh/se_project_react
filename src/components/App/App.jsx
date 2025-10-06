import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import CurrentUserContext from "../../contexts/CurrentUserContext";
import api from "../../utils/api";
import auth from "../../utils/auth";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LogInModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [deleteItem, setDeleteItem] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);
  const [loginError, setLoginError] = useState("");
  const [profileError, setProfileError] = useState("");

  const handleCloseAllModals = () => {
    setActiveModal("");
    setLoginError(""); // Clear login errors when closing modals
    setProfileError(""); // Clear profile errors when closing modals
  };

  // Token validation function
  const handleTokenCheck = () => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return; // No token found, user stays logged out
    }

    auth
      .checkToken(token)
      .then((user) => {
        // Token is valid, log user in
        setCurrentUser(user);
        setIsLoggedIn(true);
        setToken(token);
      })
      .catch((err) => {
        // Token is invalid, remove it and keep user logged out
        console.error("Token validation failed:", err);
        localStorage.removeItem("jwt");
        setToken(null);
        setCurrentUser(null);
        setIsLoggedIn(false);
      });
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
    setToken(null);
    // Redirect user to home page after logout
    navigate("/");
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
        console.log("User registered successfully:", newUser);

        // Automatically log in the user after successful registration
        return auth.loginUser(userData.email, userData.password);
      })
      .then((loginData) => {
        if (loginData.token) {
          localStorage.setItem("jwt", loginData.token);
          setToken(loginData.token);

          // After storing token, check it to get user data
          return auth.checkToken(loginData.token);
        }
      })
      .then((user) => {
        if (user) {
          setCurrentUser(user);
          setIsLoggedIn(true);
          console.log("User automatically logged in after registration");
          resetForm();
          handleCloseAllModals();
        }
      })
      .catch((error) => {
        console.error("Registration or auto-login failed:", error);
        // If registration succeeded but login failed, still close modal
        // The user can manually log in
        resetForm();
        handleCloseAllModals();
      });
  };

  const handleLoginSubmit = (userData, resetForm) => {
    setLoginError(""); // Clear any previous errors
    auth
      .loginUser(userData.email, userData.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setToken(data.token);

          // After storing token, check it to get user data
          return auth.checkToken(data.token);
        }
      })
      .then((user) => {
        if (user) {
          setCurrentUser(user);
          setIsLoggedIn(true);
          console.log("User logged in successfully");
          resetForm();
          handleCloseAllModals();
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setLoginError("Email or password incorrect");
      });
  };

  const handleEditProfileSubmit = (userData, resetForm) => {
    if (!token) {
      console.log("User must be logged in to edit profile");
      return;
    }

    setProfileError(""); // Clear any previous errors
    api
      .updateUser(userData, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        console.log("Profile updated successfully");
        resetForm();
        handleCloseAllModals();
      })
      .catch((error) => {
        console.error("Profile update failed:", error);
        setProfileError("Failed to update profile. Please try again.");
      });
  };

  const handleAddItemSubmit = (item, resetForm) => {
    // Check if user is authenticated before making protected request
    if (!token) {
      console.log("User must be logged in to add items");
      return;
    }

    api
      .addClothingItem(item, token)
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
    // Check if user is authenticated before making protected request
    if (!token) {
      console.log("User must be logged in to delete items");
      return;
    }

    api
      .deleteClothingItem(deleteItem._id, token)
      .then(() => {
        setClothingItems((cards) =>
          cards.filter((item) => item._id !== deleteItem._id)
        );
        setDeleteItem(null);
        handleCloseAllModals();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    // Check if user is authenticated before making protected request
    if (!token) {
      console.log("User must be logged in to like items");
      return;
    }

    const action = isLiked ? api.unlikeItem : api.likeItem;
    action(id, token)
      .then((updatedItem) => {
        setClothingItems((items) =>
          items.map((item) => (item._id === id ? updatedItem : item))
        );
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

  // Check token on app load
  useEffect(() => {
    handleTokenCheck();
  }, []); // Empty dependency array = runs once on component mount

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
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTempUnit, handleTempUnitChange }}
      >
        <div className="app">
          <Header
            weatherData={weatherData}
            handleAddClick={() => setActiveModal("create")}
            handleRegisterClick={() => setActiveModal("register")}
            handleLoginClick={() => setActiveModal("login")}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  onViewItem={handleViewItem}
                  onLike={handleCardLike}
                  currentUser={currentUser}
                  weatherData={weatherData}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    clothingItems={clothingItems}
                    onViewItem={handleViewItem}
                    onLike={handleCardLike}
                    currentUser={currentUser}
                    handleAddClick={() => setActiveModal("create")}
                    onLogout={handleLogout}
                    onEditProfile={() => setActiveModal("edit-profile")}
                  />
                </ProtectedRoute>
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
            onSwitchToLogin={() => setActiveModal("login")}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={handleCloseAllModals}
            onSubmit={handleLoginSubmit}
            onSwitchToRegister={() => setActiveModal("register")}
            errorMessage={loginError}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={handleCloseAllModals}
            onSubmit={handleEditProfileSubmit}
            errorMessage={profileError}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
