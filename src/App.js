import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const AssociatePanelContainer = lazy(() =>
  import(
    /* webpackChunkName:"AssociatePanel" */ "./component/AssociatePanel/AssociatePanelContainer"
  )
);
const OpenPositionContainer = lazy(() =>
  import(
    /* webpackChunkName:"OpenPosition" */ "./component/OpenPosition/OpenPositionContainer"
  )
);
const CandidatesContainer = lazy(() =>
  import(
    /* webpackChunkName:"Candidates" */ "./component/Candidate/CandidatesContainer"
  )
);
const Navbar = lazy(() =>
  import(/* webpackChunkName:"Navbar" */ "./component/Navbar")
);

const App = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Switch>
          <Route
            path="/OpenPosition"
            component={OpenPositionContainer}
            exact={true}
          />
          <Route
            path="/Candidates"
            component={CandidatesContainer}
            exact={true}
          />
          <Route
            path="/AssociatePanel"
            component={AssociatePanelContainer}
            exact={true}
          />
        </Switch>
      </Container>
    </>
  );
};

export default App;
