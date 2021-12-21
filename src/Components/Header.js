import NavBar from "./NavBar";

function Header ({handlePageChange, isOnPage}) {
    return (
        <div className="header">
            <NavBar />
            <h1>Hello Janet, welcome.</h1>
            <button onClick={handlePageChange}>{isOnPage ? "Add New Item" : "View Pantry List"}</button>
        </div>
    )
}

export default Header;