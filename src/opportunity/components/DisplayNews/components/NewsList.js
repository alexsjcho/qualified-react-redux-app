import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsItem from "./NewsItem";

export default class NewsList extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <NewsItem />
          </Col>
        </Row>
      </Container>
    );
  }
}
