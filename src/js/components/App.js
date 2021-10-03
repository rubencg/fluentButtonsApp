import React from "react";
import List from "./List";
import ButtonForm from "./ButtonForm";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LearnerBtn from "./LearnerBtn";
import NavigationBar from "./NavigationBar";
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

const App = () => (
  <Container>
    <NavigationBar />
    <Row className="py-5">
      <Col><h2>User</h2></Col>
    </Row>
    <Row className="py-5">
      <Col>
        <LearnerBtn />
      </Col>
    </Row>
    <Row className="py-5">
      <Col><h2>Buttons</h2></Col>
    </Row>
    <Row>
      <List />
    </Row>
    <Row className="py-5">
      <h2>Add a new button</h2>
      <ButtonForm />
    </Row>
  </Container>
);

export default App;