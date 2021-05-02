import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <Navbar.Brand href="/home">MOYURI</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/home" href="/home">
            Home
          </Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">contact</Nav.Link>
        </Nav>
        <Nav>
          <button className="btn btn-secondary">
            <a style={{color: 'white'}} href="https://drive.google.com/uc?export=download&id=1_-Y9m_sKIdzAZneEPRGdnSFEjSmAsg-M">
            <FontAwesomeIcon icon={faArrowDown} />
              DOWNLOAD RESUME
            </a>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
