<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    isActive ? "nav-item active" : "nav-item";

  return (
    <nav className="glass-nav">
      <h2 className="logo">SCHOOVENTS</h2>

      <div className="nav-links">
        <NavLink to="/" end className={navClass}>
          Home
          <span className="glimmer" />
        </NavLink>

        <NavLink to="/games" className={navClass}>
          Games
          <span className="glimmer" />
        </NavLink>

        <NavLink to="/leaderboard" className={navClass}>
          Leaderboard
          <span className="glimmer" />
        </NavLink>

        <NavLink to="/links" className={navClass}>
          Links
          <span className="glimmer" />
        </NavLink>
      </div>
    </nav>
=======
import { Link } from "react-router-dom";
import "../components/styles/navbar.css";
import logo from "../assets/logo.png"; 
export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="PET Logo" />
      </Link>
      <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
      <Link to="/quote" className="nav-btn">
        REQUEST A QUOTE
      </Link>
    </header>
>>>>>>> 72176ba77c1f9b4f4515e0aa547d83d66a57b36d
  );
}
