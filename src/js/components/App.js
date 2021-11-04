import React, { useState, useEffect } from "react";
import List from "./List";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Custom.scss';
import LearnerBtn from "./LearnerBtn";
import ButtonList from "./ButtonList";
import NavigationBar from "./NavigationBar";
import { Container, Row, Col } from 'react-bootstrap';
import awsconfig from '../../aws-exports';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
const todaysDate = new Date();
const todaysDateId = `${todaysDate.getDate()}-${todaysDate.getMonth()}-${todaysDate.getFullYear()}`;

function getButtonsClicksForButton() {
  const apiName = 'fluentapi';
  const path = `/buttonClicks/${todaysDateId}`;
  const myInit = {
    headers: {},
  };
  return API.get(apiName, path, myInit);
}

Amplify.configure(awsconfig);

const App = () => {
  const [person, setPerson] = useState(null);
  const [buttonClicks, setButtonClicks] = useState({});
  const saveButtonClick = (clicks) => {
    const apiName = 'fluentapi';
    const path = `/buttonClicks`;
    const myInit = {
      body: clicks,
      headers: {},
    };
    API.put(apiName, path, myInit).then(data => {
      console.log("data", data);
    }).catch(err => {
      console.log("err", err);
    });
  }
  const handlePersonClick = (person) => {
    setPerson(person);
  };
  const handleButtonClick = (buttonName) => {
    if (!person) {
      alert("Please select a person first");
      return;
    }
    
    if(!buttonClicks.userClicks[person]){
      buttonClicks.userClicks[person] = {};
    }
    if(!buttonClicks.userClicks[person][buttonName]){
      buttonClicks.userClicks[person][buttonName] = 0;
    }
    buttonClicks.userClicks[person][buttonName] = buttonClicks.userClicks[person][buttonName] + 1;
    setButtonClicks({
      ...buttonClicks
    });

    saveButtonClick(buttonClicks);
  };

  useEffect(() => {
    getButtonsClicksForButton().then(response => {
      console.log("response from server", response)
      if (response && response.length > 0) {
        setButtonClicks(response[0]);
      }else{
        setButtonClicks({
          day: todaysDateId,
          userClicks: {}
        });
      }
    });
  }, []);

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
        <ButtonList onButtonClick={handleButtonClick} />
      </Row>
    </Container>
  )
};

export default App;