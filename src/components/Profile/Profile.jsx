import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

import "./Profile.css";


function Profile({ clothingItems, onViewItem, handleAddClick }) {
  return (
    <main className="profile">
      <SideBar />
      <ClothesSection clothingItems={clothingItems} onViewItem={onViewItem} handleAddClick={handleAddClick}/>
    </main>
  );
}

export default Profile;