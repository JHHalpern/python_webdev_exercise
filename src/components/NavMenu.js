import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavMenu.css";

export default function NavMenu() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="nav-menu">
      <Link
        to="/"
        className={`nav-button home ${currentPage == "/" ? "selected" : ""}`}
      >
        <div className="link-text">Home</div>
      </Link>
      <Link
        to="/search"
        className={`nav-button home ${
          currentPage == "/search" ? "selected" : ""
        }`}
      >
        <div className="link-text">Search</div>
      </Link>
    </div>
  );
}
