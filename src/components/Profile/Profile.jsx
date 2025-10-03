import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

import "./Profile.css";

function Profile({ clothingItems, onViewItem, handleAddClick, onLogout }) {
  return (
    <main className="profile">
      <SideBar onLogout={onLogout} />
      <ClothesSection
        clothingItems={clothingItems}
        onViewItem={onViewItem}
        handleAddClick={handleAddClick}
      />
    </main>
  );
}

export default Profile;
