import React, { useState } from 'react';
import brownie from '../../img/brownie.jpg';
import zelda from '../../img/zelda.jpg';
import parents from '../../img/parents.jpg';
import { Row, Col, Image } from 'react-bootstrap';

function LearnerBtn(props) {

  return (
    <Row>
        <Col>
            <button className="learner-btn" >
                <Image src={brownie} roundedCircle />
            </button>
        </Col>
        <Col>
            <button className="learner-btn" >
                <Image src={zelda} roundedCircle />
            </button>
        </Col>
        <Col>
            <button className="learner-btn" >
                <Image src={parents} roundedCircle />
            </button>
        </Col>
    </Row>
  );
}

export default LearnerBtn;