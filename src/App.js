import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Header from "./components/header/header";
import Links from "./components/links/links";

import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Links />
      </Container>
    </div>
  );
}

export default App;
