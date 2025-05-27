import { Link } from "react-router-dom";
import "../css/Navbar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie Page</Link>
      </div>
      <div className="nabar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favourites" className="navbar-link">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
