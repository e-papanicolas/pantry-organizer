import {useState} from "react";

function SearchBar({handleSearch, setSearchTerm, searchTerm}) {

    
    
    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value);
        handleSearch();
    }


    return (
        <div>
            <form>
            <input type="text" placeholder="Search..." name="search" value={searchTerm} onChange={handleSearchTermChange}></input>
            {/* <button type="submit">search</button> */}
            </form>
        </div>
    )
}

export default SearchBar;