import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          Tech<span>News</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#categories">Categories</a>
          <a href="#latest">Latest News</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
