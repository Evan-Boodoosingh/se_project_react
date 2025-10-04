import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

import "./Profile.css";

function Profile({
  clothingItems,
  onViewItem,
  onLike,
  currentUser,
  handleAddClick,
  onLogout,
  onEditProfile,
}) {
  return (
    <main className="profile">
      <SideBar onLogout={onLogout} onEditProfile={onEditProfile} />
      <ClothesSection
        clothingItems={clothingItems}
        onViewItem={onViewItem}
        onLike={onLike}
        currentUser={currentUser}
        handleAddClick={handleAddClick}
      />
    </main>
  );
}

export default Profile;
