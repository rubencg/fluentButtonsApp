import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import { Button, Form } from 'react-bootstrap';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Button Label</Form.Label>
          <Form.Control 
            type="text" 
            id="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Enter label" />
        </Form.Group>
        <Form.Group className="mt-5" controlId="formButton">
          <Button variant="outline-primary" type="submit">
            Save
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

const ButtonForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default ButtonForm;