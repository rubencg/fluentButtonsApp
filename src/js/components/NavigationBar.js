import { Container, Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    // Declare a new state variable, which we'll call "count"
  
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">My Learner App</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#report">Report</Nav.Link>
            <Nav.Link href="#addBtn">Add New Button</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
  }
  
  export default NavigationBar;