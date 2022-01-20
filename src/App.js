import "./App.css";
import NavBar from "./Components/NavBar";
import PantryDisplay from "./Components/PantryDisplay";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Locations from "./Components/Locations";
import HomePage from "./Components/HomePage";
import NewItemForm from "./Components/NewItemForm";

function App() {
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
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/pantry"
            element={
              <PantryDisplay
                itemsToDisplay={itemsToDisplay}
                handleDelete={handleDelete}
                handleSearch={handleSearch}
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
              />
            }
          />
          <Route path="/locations" element={<Locations />} />
          <Route
            path="/newitem"
            element={
              <NewItemForm
                items={items}
                handleSubmit={handleSubmit}
                locations={locations}
              />
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
