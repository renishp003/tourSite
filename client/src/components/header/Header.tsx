
import { Container } from "react-bootstrap";
import logo from '../../assets/images/logo5.png'
import "../header/header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import RoutesP from "../routes/Routep";

const Header = () => {
  const auth = localStorage.getItem("token")
  return (

    <>
     <Navbar expand="lg" className="d-flex justify-content-center hedershadow sticky-top z-index-3	">
      <Container >
        
        <Navbar.Brand href="#home" ><img src={logo} alt="" className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="me-4 headerfontsize">HOME</Link>
            <Link to="/about" className="me-4 headerfontsize">ABOUT</Link>
            <Link to="/destination" className="me-4 headerfontsize">DESTINATIONS</Link>
            <Link to="/tourpackages" className="me-4 headerfontsize">TOUR-PACKAGES</Link>
            <Link to="/contact" className="me-4 headerfontsize">CONTACT US</Link>
            {
           
            auth?<Link to="/logout" className="headerfontsize">SIGNOUT</Link>: <Link to="/login" className="headerfontsize">SIGNIN</Link>
            }
            

            {/* <Link to="/registration" className="headerfontsize">Registration</Link> */}

           
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>    
    </>
  );
};

export default Header;
