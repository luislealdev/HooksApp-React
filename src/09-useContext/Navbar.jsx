import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light rounded-3">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink
                to="/"
                className={`nav-link ${({ isActive }) => {
                  return isActive ? "active" : "";
                }}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={`nav-link ${({ isActive }) => {
                  return isActive ? "active" : "";
                }}`}
              >
                About
              </NavLink>
              <NavLink
                to="/login"
                className={`nav-link ${({ isActive }) => {
                  return isActive ? "active" : "";
                }}`}
              >
                Login
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
