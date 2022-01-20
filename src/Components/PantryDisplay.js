import SearchBar from "./SearchBar";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

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
      <Link to="/newitem">Add New Item</Link>
      <br />
      <ItemList itemsToDisplay={itemsToDisplay} handleDelete={handleDelete} />
    </div>
  );
}

export default PantryDisplay;
