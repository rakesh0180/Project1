import React from "react";
import { Row, Table } from "react-bootstrap";
import { MdOutlineNoteAlt } from "react-icons/md";

const AssociatePanelTable = () => {
  const associatePanel = [
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
    {
      client: "Applied Materials",
      jobTitle: "React Developer",
      candidateName: "ABC",
      levelOne: "yes",
      levelTwo: "yes",
      clientStatus: "yes",
      hrStatus: "yes",
    },
    {
      client: "ABC",
      jobTitle: "React Developer",
      candidateName: "XYZ",
      levelOne: "yes",
      levelTwo: "no",
      clientStatus: "yes",
      hrStatus: "no",
    },
  ];
  const headCell = {
    backgroundColor: "#cae1fe",
  };
  return (
    <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td style={headCell}>Id</td>
            <td style={headCell}>Client</td>
            <td style={headCell}>Job Title</td>
            <td style={headCell}>Candidate Name</td>
            <td style={headCell}>Level 1</td>
            <td style={headCell}>Level 2</td>
            <td style={headCell}>Client Status</td>
            <td style={headCell}>HR Status</td>
            <td style={headCell}>{"         "}</td>
          </tr>
        </thead>

        <tbody>
          {associatePanel.map((candidate, i) => {
            return (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>{candidate.client}</td>
                <td>{candidate.jobTitle}</td>
                <td>{candidate.candidateName}</td>
                <td>{candidate.levelOne}</td>
                <td>{candidate.levelTwo}</td>
                <td>{candidate.clientStatus}</td>
                <td>{candidate.hrStatus}</td>
                <td className="eud">
                  <MdOutlineNoteAlt />
                </td>
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
    </Row>
  );
};

export default AssociatePanelTable;
