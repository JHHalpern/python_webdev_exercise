import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-header">Lab Results Finder</div>

      <div className="welcome-text">
        Welcome to the Lab Results Finder. To find patient records, navigate to
        the Search page and enter the patient's first name.
      </div>
      <Link to="/search">
        <Button variant="primary" size="lg" className="search-button">
          Search
        </Button>
      </Link>
    </div>
  );
}
