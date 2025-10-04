import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  clothingItems,
  onViewItem,
  onLike,
  currentUser,
  handleAddClick,
}) {
  // Don't render anything if no current user (shouldn't happen on profile page)
  if (!currentUser) {
    return null;
  }

  // Filter items to show only current user's clothes
  const userClothingItems = clothingItems.filter((item) => {
    return item.owner === currentUser?._id;
  });

  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your Items
        <button onClick={handleAddClick} className="clothes-section__btn">
          + Add new
        </button>
      </div>

      {userClothingItems.length > 0 ? (
        <ul className="clothes-section__card-list">
          {userClothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                data={item}
                onClick={() => onViewItem(item)}
                onLike={onLike}
                currentUser={currentUser}
              />
            );
          })}
        </ul>
      ) : (
        <p className="clothes-section__empty-message">
          You haven't added any clothing items yet. Click "Add new" to get
          started!
        </p>
      )}
    </section>
  );
}

export default ClothesSection;
