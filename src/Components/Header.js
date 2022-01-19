function Header({ handlePageChange, isOnPage }) {
  return (
    <div className="header">
      <h1>Hello Janet, welcome.</h1>
      <h2>Let's organize your pantry!</h2>
      <div>
        <button onClick={handlePageChange}>
          {isOnPage ? "Add New Item" : "View Pantry List"}
        </button>
      </div>
    </div>
  );
}

export default Header;
