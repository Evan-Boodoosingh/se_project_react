import "./ItemCard.css";
import likeIcon from "../../assets/like.svg";
import filledIcon from "../../assets/filled.svg";

function ItemCard({ data, onClick, onLike, currentUser }) {
  // Check if current user has liked this item
  const isLiked = data.likes?.some((id) => id === currentUser?._id);
  
  const handleLikeClick = (e) => {
    e.stopPropagation(); // Prevent card click when clicking like button
    onLike({ id: data._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__image-container">
        <img src={data.imageUrl} alt={data.name} className="card__image" onClick={onClick} />
        {currentUser && (
          <button
            className={`card__like-button ${isLiked ? 'card__like-button_active' : ''}`}
            onClick={handleLikeClick}
            type="button"
          >
            <img 
              src={isLiked ? filledIcon : likeIcon} 
              alt="Like" 
              className="card__like-icon" 
            />
          </button>
        )}
      </div>
      <h2 className="card__title">{data.name}</h2>
    </li>
  );
}

export default ItemCard;