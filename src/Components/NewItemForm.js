import { useState } from "react";

function NewItemForm({ items, handleSubmit, locations }) {
  const [formData, setFormData] = useState({
    id: items.length + 1,
    name: "",
    location_id: "",
  });

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Add a new item to your pantry</h2>
      <form onSubmit={(e) => handleSubmit(e, formData)}>
        <label>Item Name:</label>
        <input
          type="text"
          onChange={handleFormChange}
          name="name"
          value={formData.name}
        />
        <br />
        <label>Item Location:</label>
        <select
          type="text"
          onChange={handleFormChange}
          name="location"
          value={formData.location}
        >
          <option>Select a location:</option>
          {locations.map((location) => {
            return (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            );
          })}
        </select>
        <br />
        <button type="submit">Add Item!</button>
      </form>
    </div>
  );
}

export default NewItemForm;
