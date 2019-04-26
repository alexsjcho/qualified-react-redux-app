import React from "react";
import NewsSearchBar from "./components/NewsSearchBar";

import { fetchData } from "./newsAPI/newsAPI";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NewsItem from "./components/NewsItem";

import Form from "react-bootstrap/Form";

export default class DisplayNews extends React.Component {
  state = {
    newsItems: [],
    searchQuery: "Square"
  };

  componentDidMount() {
    this.fetchNewsData();
  }

  onInputChange = event => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  };

  fetchNewsData = () => {
    fetchData(this.state.searchQuery).then(data => {
      this.setState({ newsItems: data.articles });
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.fetchNewsData();
  };

  render() {
    const { newsItems, searchQuery } = this.state;
    return (
      <div>
        <h4 style={{ marginTop: "2rem" }} className="text-center">
          Search News
        </h4>
        <Container style={{ marginBottom: "1rem" }}>
          <Form
            onSubmit={this.onFormSubmit}
            onChange={this.onInputChange}
            type="text">
            <NewsSearchBar defaultValue={searchQuery} />
          </Form>
        </Container>

        <Container>
          <Row>
            {newsItems.map((newsItem, index) => (
              <NewsItem key={index} {...newsItem} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
