import Filter from "./Filter";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";

function PantryDisplay({
  itemsToDisplay,
  handleDelete,
  searchTerm,
  handleSearch,
}) {
  return (
    <div>
      <h2>My Pantry List</h2>
      <br />
      <SearchBar
        itemsToDisplay={itemsToDisplay}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <br />
      <Filter itemsToDisplay={itemsToDisplay} />
      <ItemList itemsToDisplay={itemsToDisplay} handleDelete={handleDelete} />
    </div>
  );
}

export default PantryDisplay;
