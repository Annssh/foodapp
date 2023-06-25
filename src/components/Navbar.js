import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "rgba(175, 175, 175, 0.1)" }}
      >
        <div
          className="container-fluid navbar-brand"
          style={{ fontSize: "20px" }}
        >
          <div>
            <button
              className="btn me-2 btn-info"
              type="button"
              style={{ borderRadius: "10px" }}
            >
              Donate
            </button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <ion-icon name="reorder-three"></ion-icon>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active content" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active content" to="/link">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active content" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active content" to="/oura">
                  Our Achievement
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-success btn-dark"
                type="submit"
              >
                Sign In
              </button>
              <button
                className="btn btn-outline-success btn-dark"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
