import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import NewsItem from "./NewsItem";

export default class NewsList extends React.Component {
  render() {
    // const renderedNewsList = news.map(new => {
    //   return (
    //     <NewsItem
    //     key={news.source.id}

    //     />
    //   )
    // })

    return (
      <Container>
        <Row>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </Row>
      </Container>
    );
  }
}
