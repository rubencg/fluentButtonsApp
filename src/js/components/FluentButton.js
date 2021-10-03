import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

function FluentButton(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Col>
      <button className="btn btn-info btn-lg" key={props.id} onClick={() => setCount(count + 1)}>{props.children}</button>
      <p>You clicked {count} times</p>
    </Col>
  );
}

export default FluentButton;