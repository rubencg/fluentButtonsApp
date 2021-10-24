import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ButtonForm from './ButtonForm';

function NavigationBar() {
    // Declare a new state variable, which we'll call "count"
  
    return (
        <Router>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/">My Learner App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#report">Report</Nav.Link>
                    <Nav.Link href="/addBtn">Add New Button</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

            <Route path="/" />
            <Route path="/addBtn"  component={ButtonForm} />

        </Router>
    );
  }
  
  export default NavigationBar;