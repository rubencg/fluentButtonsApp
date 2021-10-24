import React, { useState } from 'react';
import brownie from '../../img/brownie.jpg';
import zelda from '../../img/zelda.jpg';
import parents from '../../img/parents.jpg';
import { Row, Col, Image } from 'react-bootstrap';

function LearnerBtn(props) {

  return (
    <Row>
        <Col className="text-center">
            <button className="learner-btn" >
                <Image src={brownie} rounded />
            </button>
        </Col>
        <Col className="text-center">
            <button className="learner-btn" >
                <Image src={zelda} rounded />
            </button>
        </Col>
        <Col className="text-center">
            <button className="learner-btn" >
                <Image src={parents} rounded />
            </button>
        </Col>
    </Row>
  );
}

export default LearnerBtn;