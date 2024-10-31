import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Results.css";
import ResultsRow from "./ResultsRow";

export default function Results({ results }) {
  return (
    <div className="results-container">
      <div className="results-header">
        {results.length == 0
          ? "No Results Found"
          : `Results Found: ${results.length}`}
      </div>
      {!!results.length && (
        <Container className="results-grid-container">
          <Row className="header-row">
            <Col className="column-title">Patient ID</Col>
            <Col className="column-title">Last Name</Col>
            <Col className="column-title">First Name</Col>
            <Col className="column-title">Gender</Col>
            <Col className="column-title">Test Date</Col>
            <Col className="column-title">Test Name</Col>
            <Col className="column-title">Test Result</Col>
          </Row>
          {results.map((entry, index) => {
            return <ResultsRow entry={entry} key={index} />;
          })}
        </Container>
      )}
    </div>
  );
}
