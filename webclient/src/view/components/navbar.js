import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LayoutService from "../../service/layout.service";
const userSession = require("../../controller/session.controller");

function NavBar() {
  const [user, setUser] = useState(false);
  useEffect(() => {
      let userLogged = userSession.getSession();
      if (userLogged) {
          setUser(userLogged);
      }
  }, []);
  return (
    < LayoutService />
  );
}

export default NavBar;