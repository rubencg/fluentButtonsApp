import React from "react";
import { connect } from "react-redux";
import FluentButton from "./FluentButton";
import { Row } from 'react-bootstrap';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <Row>
    {articles.map(el => (
        <FluentButton id={el.id}>{el.title}</FluentButton>
    ))}
  </Row>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;