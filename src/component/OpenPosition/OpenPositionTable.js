import React from "react";
import { Table } from "react-bootstrap";
import { Col } from "react-bootstrap";

const OpenPositionTable = () => {
  const openPositionData = [
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "Data Science",
      position: 5,
      exp: 4,
      tools: " vs code, jupiter, pycharm",
      practice: "Microsoft",
      billingDate: 1 + "$",
      target: "25/09/2021",
      earlyStartingDate: "15/09/2021",
    },
    {
      jobTitle: "React Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 2 + "$",
      target: "15/09/2021",
      earlyStartingDate: "5/09/2021",
    },
    {
      jobTitle: "Full Stack Developer",
      position: 5,
      exp: 4,
      tools: " Vs-code, Postman,Nodejs",
      practice: "Microsoft",
      billingDate: 3 + "$",
      target: "23/09/2021",
      earlyStartingDate: "15/09/2021",
    },
  ];
  const headCell = {
    backgroundColor: "#cae1fe",
  };
  return (
    <Col>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td style={headCell}>Job Title</td>
            <td style={headCell}>Position</td>
            <td style={headCell}>Exp</td>
            <td style={headCell}>Tool</td>
            <td style={headCell}>Practice</td>
            <td style={headCell}>Billing Rate</td>
            <td style={headCell}>Target Date</td>
            <td style={headCell}>Early starting date</td>
          </tr>
        </thead>

        <tbody>
          {openPositionData.map((openPosition, i) => {
            return (
              <tr key={i + 1}>
                <td>{openPosition.jobTitle}</td>
                <td>{openPosition.position}</td>
                <td>{openPosition.exp}</td>
                <td>{openPosition.tools}</td>
                <td>{openPosition.practice}</td>
                <td>{openPosition.billingDate}</td>
                <td>{openPosition.target}</td>
                <td>{openPosition.earlyStartingDate}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8">
              {/* <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>

                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu> */}
            </td>
          </tr>
        </tfoot>
      </Table>
    </Col>
  );
};

export default OpenPositionTable;