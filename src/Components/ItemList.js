import ItemCard from "./ItemCard";

function ItemList({items, handleDelete}) {

    const itemsArray = items.map(item => {
        return (
            <ItemCard key={item.id} name={item.name} date={item.date} id={item.id} location={item.location} handleDelete={handleDelete}/>
        )
    })

    return (
        <div>
            {itemsArray}
        </div>
    )
}

export default ItemList;