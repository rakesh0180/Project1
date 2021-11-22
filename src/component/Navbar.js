import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link href="/OpenPosition">OpenPosition</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Candidates" eventKey="link-1">
              Candidates
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/AssociatePanel" eventKey="link-2">
              Associate Panel
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link href="/OpenPosition" eventKey="link-1">
              OpenPosition
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Candidates" eventKey="link-2">
              Candidates
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/AssociatePanel" eventKey="link-3">
              Associate Panel
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default withRouter(Navbar);
