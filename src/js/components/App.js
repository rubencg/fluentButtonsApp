import React from "react";
import List from "./List";
import Form from "./Form";
import '../../App.css';

const App = () => (
  <>
    <div>
      <h2>Buttons</h2>
      <List />
    </div>
    <div>
      <h2>Add a new button</h2>
      <Form />
    </div>
  </>
);

export default App;