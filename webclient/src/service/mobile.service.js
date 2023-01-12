import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const userSession = require("../controller/session.controller");

function MobileService() {
    const [user, setUser] = useState(false);
    useEffect(() => {
        let userLogged = userSession.getSession();
        if (userLogged) {
            setUser(userLogged);
        }
    }, []);
    return (

        <Navbar key={false} bg="light" expand={false} className="mb-3">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img alt="logo" src="/assets/logo2.PNG" width="30" height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    V9-scooter
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${false}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                            V9-scooter
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            {user ? <Nav.Link href="/ride">Ride</Nav.Link> : <div></div>}
                            {user ? <div></div> : <Nav.Link href="/Login">Login</Nav.Link>}
                            {user ? <NavDropdown title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/scooters">
                                    Available scooters
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Your scooters
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/info">User info</NavDropdown.Item>
                                <NavDropdown.Item href="/signout">
                                    Signout
                                </NavDropdown.Item>
                            </NavDropdown> : <div></div>}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    );
}

export default MobileService;