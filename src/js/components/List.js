import React from "react";
import { connect } from "react-redux";
import FluentButton from "./FluentButton";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <>
    <div>
        {articles.map(el => (
        <button className="fluent-button" key={el.id}>{el.title}</button>
        ))}
    </div>
    <div>
    {articles.map(el => (
        <FluentButton id={el.id}>{el.title}</FluentButton>
    ))}
    </div>
  </>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;