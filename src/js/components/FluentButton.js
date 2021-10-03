import React, { useState } from 'react';

function FluentButton(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="fluent-button" key={props.id} onClick={() => setCount(count + 1)}>{props.children}</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default FluentButton;