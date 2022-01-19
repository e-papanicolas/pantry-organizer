import ItemCard from "./ItemCard";

function ItemList({ itemsToDisplay, handleDelete }) {
  const itemsArray = itemsToDisplay.map((item) => {
    return (
      <ItemCard
        key={item.id}
        name={item.name}
        date={item.created_at}
        id={item.id}
        location={item.location_id}
        handleDelete={handleDelete}
      />
    );
  });

  return <div>{itemsArray}</div>;
}

export default ItemList;
