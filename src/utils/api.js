const BASE_URL = "https://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const getClothingItems = () => {
  return fetch(`${BASE_URL}/items`, {
    headers: {"Content-Type": "application/json"},
  }).then(checkResponse);
};
const addClothingItem = ({name, imageUrl, weather}) => {
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name, imageUrl, weather})
  }).then(checkResponse);
};

const deleteClothingItem = (id) => {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  }).then(checkResponse);
};

const api = {getClothingItems, addClothingItem, deleteClothingItem};
export default api;