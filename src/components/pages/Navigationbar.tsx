import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar: React.FC = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Dphi</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
