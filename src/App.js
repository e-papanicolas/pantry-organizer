
import './App.css';
import Header from "./Components/Header";
import NewItemForm from "./Components/NewItemForm";
import PantryDisplay from "./Components/PantryDisplay";
import {useState, useEffect} from "react";

function App() {

  const [isOnPage, setPage] = useState(true);
  const [items, setItems] = useState([]);
  const [update, setUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function loadItems() {
    fetch(`http://localhost:3001/items`)
    .then(res => res.json())
    .then(data => {
      setItems(data);
    });
  }

  useEffect(() => {
    loadItems();
  }, [update])

  function handlePageChange() {
    setPage(!isOnPage);
  }

  function handleSubmit(e, newItem) {
    e.preventDefault();
    
    fetch(`http://localhost:3001/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(newItem)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUpdate(!update);
    })
    setPage(true);
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/items/${id}`, {
      method: "DELETE"
    })
    .then(setUpdate(!update));
    
  }

  function handleSearch() {
    
    const searchResults = items.filter(item => {
      return item.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    })
    setItems(searchResults);
    
  }

  return (
    <div className="App">
      <div>
      <Header handlePageChange={handlePageChange} isOnPage={isOnPage}/>
      { isOnPage ? 
      <PantryDisplay 
        items={items} 
        handleDelete={handleDelete} 
        handleSearch={handleSearch} 
        setSearchTerm={setSearchTerm} 
        searchTerm={searchTerm}/> 
      : 
      <NewItemForm 
        items={items} 
        handleSubmit={handleSubmit}/> 
        }
      </div>
    </div>
  );
}

export default App;
