import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onViewItem, handleAddClick }) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your Items
        <button
          onClick={handleAddClick}
        className="clothes-section__btn">
            + Add new
            </button>
      </div>
      <ul className="clothes-section__card-list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              data={item}
              onClick={() => onViewItem(item)}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
