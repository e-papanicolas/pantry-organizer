function SearchBar({ handleSearch, searchTerm }) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={searchTerm}
          onChange={handleSearch}
        ></input>
        {/* <button type="submit">search</button> */}
      </form>
    </div>
  );
}

export default SearchBar;
