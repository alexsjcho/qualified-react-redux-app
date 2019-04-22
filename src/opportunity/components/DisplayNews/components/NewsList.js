import React from "react";
import Container from "react-bootstrap/Container";
import NewsItem from "./NewsItem";

export default class NewsList extends React.Component {
  render() {
    return (
      <Container>
        <NewsItem />
      </Container>
    );
  }
}
