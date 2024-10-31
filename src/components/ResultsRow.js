import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./ResultsRow.css";

export default function ResultsRow({ entry }) {
  return (
    <Row className="results-row">
      <Col className="data-column">{entry.PatientID}</Col>
      <Col className="data-column">{entry.PatientLastName}</Col>
      <Col className="data-column">{entry.PatientFirstName}</Col>
      <Col className="data-column">{entry.Gender}</Col>
      <Col className="data-column">{entry.MostRecentTestDate}</Col>
      <Col className="data-column">{entry.TestName}</Col>
      <Col className="data-column">{entry.MostRecentLabResult}</Col>
    </Row>
  );
}
