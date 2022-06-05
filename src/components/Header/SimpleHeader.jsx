import React from "react";
import { Navbar, Nav } from "rsuite";

const SimpleNavbar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#">GEVME</Navbar.Brand>
      <Nav pullRight>
        <Nav.Item>Sudeep Pirangi</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default SimpleNavbar;
