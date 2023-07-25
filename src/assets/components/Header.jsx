import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className="py-2">
                    <Navbar.Brand href="#home">
                        Income Expense Tracker
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Income
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/expenses" className="nav-link">
                                        Expense
                                    </Link>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}
