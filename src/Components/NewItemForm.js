import {useState} from "react";

function NewItemForm({items, handleSubmit}) {

    const [formData, setFormData] = useState({
        id: items.length +1,
        name: "",
        location: "",
        date: ""
    })

    function handleFormChange(e) {
        console.log(e);
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>Add a new item to your pantry</h2>
            <form onSubmit={(e) => handleSubmit(e, formData)}>
            <label>Item Name:</label>
            <input type="text" onChange={handleFormChange} name="name" value={formData.name} /> <br />
            <label>Item Location:</label>
            <input type="text" onChange={handleFormChange} name="location" value={formData.location} /> <br />
            <label>Item Purchase Date:</label> 
            <input type="text" onChange={handleFormChange} name="date" value={formData.date} /> <br />
            <button type="submit">Add Item!</button>
            </form>
        </div>
    )
}

export default NewItemForm;