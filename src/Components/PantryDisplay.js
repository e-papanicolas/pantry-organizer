import Filter from "./Filter";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";

function PantryDisplay({items, handleDelete, setSearchTerm, searchTerm, handleSearch}) {
    return (
        <div>
            <Filter items={items} />
            <SearchBar items={items} setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch}/>
            <ItemList items={items} handleDelete={handleDelete}/>
        </div>
    )
}

export default PantryDisplay;