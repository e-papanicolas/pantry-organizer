function ItemCard({ name, location, date, id, handleDelete, handleUpdate }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Purchase Date: {date}</p>
      <button onClick={() => handleDelete(id)}>delete item</button>
      <button onClick={() => handleUpdate(id)}>update item</button>
    </div>
  );
}

export default ItemCard;
