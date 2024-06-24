
import { Container } from "react-bootstrap";
import logo from '../../assets/images/logo5.png'
import "../header/header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="d-flex justify-content-center hedershadow sticky-top z-index-3	">
      <Container >
        
        <Navbar.Brand href="#home" ><img src={logo} alt="" className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="me-4 headerfontsize">HOME</Nav.Link>
            <Nav.Link href="#link" className="me-4 headerfontsize">ABOUT</Nav.Link>
            <Nav.Link href="#link" className="me-4 headerfontsize">DESTINATIONS</Nav.Link>
            <Nav.Link href="#link" className="me-4 headerfontsize">TOUR-PACKAGES</Nav.Link>
            <Nav.Link href="#link" className="me-4 headerfontsize">CONTACT US</Nav.Link>
            <Nav.Link href="#link" className="headerfontsize">LOGIN</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>    </>
  );
};

export default Header;
