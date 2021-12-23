import React from "react";
import { 
    Navbar,
    Nav,
    Container,
} from "react-bootstrap"

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Investment Property Webapp</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="http://localhost:8000/property-api">API</Nav.Link>
                    <Nav.Link href="http://localhost:8000/admin">Admin</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;