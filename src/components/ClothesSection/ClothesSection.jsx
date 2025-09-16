import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onViewItem }) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your Items 
        <button className="clothes-section__btn">+ Add new</button>
      </div>
       <ul className="clothes-section__card-list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              data={item}
              onClick={() => onViewItem(item)}
              // onViewItem={onViewItem}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
