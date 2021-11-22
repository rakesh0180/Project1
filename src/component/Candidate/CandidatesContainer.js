import React from "react";
import { Row } from "react-bootstrap";
import CandidatesTable from "./CandidatesTable";

const CandidatesContainer = () => {
  return (
    <Row>
      <CandidatesTable />
    </Row>
  );
};

export default CandidatesContainer;
