import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import "./Search.css";
import Results from "./Results";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState(undefined);

  const handleInputChange = (value) => {
    setSearchInput(value);
  };

  const handleSearchClick = () => {
    if (searchInput) {
      const formattedInput =
        searchInput[0].toUpperCase() + searchInput.slice(1).toLowerCase();
      fetch(`/data/${formattedInput}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.result);
        });
    } else {
      setResults([]);
    }
    setSearchInput("");
  };

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <FloatingLabel label="First Name">
          <Form.Control
            className="search-input"
            placeholder="First Name"
            value={searchInput}
            onChange={(event) => handleInputChange(event.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleSearchClick() : null)}
          />
        </FloatingLabel>
        <Button variant="outline-primary" onClick={handleSearchClick}>
          Find Patient
        </Button>
      </div>
      {!!results && <Results results={results} />}
    </div>
  );
}
