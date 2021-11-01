import React, {useState} from "react";
import List from "./List";
import '../../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Custom.scss';
import LearnerBtn from "./LearnerBtn";
import ButtonList from "./ButtonList";
import NavigationBar from "./NavigationBar";
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import awsconfig from '../../aws-exports';
import Amplify from 'aws-amplify';

Amplify.configure(awsconfig);

const App = () => {
  const [person, setPerson] = useState(null);
  const handlePersonClick = (person) => {
    setPerson(person);
  };
  return (
    <Container>
      <NavigationBar />
      <Row className="py-5">
        <Col><h2>User</h2></Col>
      </Row>
      <Row className="py-5">
        <Col>
          <LearnerBtn onPersonClick={handlePersonClick} />
        </Col>
      </Row>
      <Row className="py-5">
        <Col>
          {!person ? "Persona no seleccionada" : `Persona actual: ${person}`}
        </Col>
      </Row>
      <Row className="py-5">
        <Col><h2>Buttons</h2></Col>
      </Row>
      <Row>
        <List />
      </Row>
      <Row className="py-5">
        <ButtonList />
      </Row>
    </Container>
  )
};

export default App;