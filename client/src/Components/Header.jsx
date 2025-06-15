import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaTasks, FaUserCircle, FaSearch, FaBell } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
    const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <FaTasks className="me-2" />
          TaskFlow
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggler" />
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About Us</Nav.Link>
            <Nav.Link as={Link} to="/features" className="nav-link">Features</Nav.Link>
            
          </Nav>
          
          <div className="d-flex align-items-center navbar-right">
            <Form className="d-flex search-form me-3">
              <Form.Control
                type="search"
                placeholder="Search tasks..."
                className="me-2 search-input"
                aria-label="Search"
              />
              <Button variant="outline-light" className="search-btn">
                <FaSearch />
              </Button>
            </Form>
            
           <Button
            variant="outline-light"
            type="button"
            onClick={() => {
                console.log("Navigating to login...");
                navigate("/login");
            }}
            >
            Login
            </Button>
            
           
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;