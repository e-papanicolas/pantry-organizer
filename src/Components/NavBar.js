// import Header from "./Header";
import { NavLink } from "react-router-dom";
import logo from "../images/treeLogo.png";

function NavBar({ loggedIn }) {
  return (
    <div className="navbar-container">
      <div className="user-info-container">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="logo"
            style={{ width: "100px" }}
          />
        </NavLink>
        <h1 id="name-of-app" style={{ color: "white" }}>
          My Pantry App
        </h1>
      </div>

      <div className="nav-buttons">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pantry">My Pantry</NavLink>
          </li>
          <li>
            <NavLink to="/locations">My Locations</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
