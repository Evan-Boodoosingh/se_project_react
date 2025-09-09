import "./ItemCard.css";


function ItemCard({ data, onClick }) {
  return <li className="card" onClick={onClick}>
     <h2 className="card__title">{data.name}</h2>
    <img src={data.link} alt={data.name} className="card__image"/>
  </li>
}

export default ItemCard;