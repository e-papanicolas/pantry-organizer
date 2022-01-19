import "./App.css";
import Header from "./Components/Header";
import NewItemForm from "./Components/NewItemForm";
import PantryDisplay from "./Components/PantryDisplay";
import { useState, useEffect } from "react";

function App() {
  const [isOnPage, setPage] = useState(true);
  const [items, setItems] = useState([]);
  const [update, setUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [locations, setLocations] = useState([]);

  function loadItems() {
    fetch(`http://localhost:9292/items`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setItemsToDisplay(data);
      });
  }

  function loadLocations() {
    fetch(`http://localhost:9292/locations`)
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
      });
  }

  useEffect(() => {
    loadItems();
    loadLocations();
  }, [update]);

  function handlePageChange() {
    setPage(!isOnPage);
  }

  function handleSubmit(e, newItem) {
    e.preventDefault();

    fetch(`http://localhost:9292/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdate(!update);
      });
    setPage(true);
  }

  function handleDelete(id) {
    fetch(`http://localhost:9292/items/${id}`, {
      method: "DELETE",
    }).then(setUpdate(!update));
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    const searchResults = items.filter((item) => {
      return item.name.toLowerCase().startsWith(e.target.value.toLowerCase());
    });
    setItemsToDisplay(searchResults);
  }

  return (
    <div className="App">
      <div>
        <Header handlePageChange={handlePageChange} isOnPage={isOnPage} />
        {isOnPage ? (
          <PantryDisplay
            itemsToDisplay={itemsToDisplay}
            handleDelete={handleDelete}
            handleSearch={handleSearch}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
        ) : (
          <NewItemForm
            items={items}
            handleSubmit={handleSubmit}
            locations={locations}
          />
        )}
      </div>
    </div>
  );
}

export default App;
