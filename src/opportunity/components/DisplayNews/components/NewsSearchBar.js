import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default class NewsSearchBar extends React.Component {
  state = {
    searchQuery: ""
  };

  onInputChange = event => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchQuery);
  };

  render() {
    const { onInputChange, onFormSubmit } = this.state;
    return (
      <Container style={{ marginBottom: "1rem" }}>
        <Form
          onSubmit={onFormSubmit}
          onChange={onInputChange}
          type="text"
          value={this.state.searchQuery}>
          <Row>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Search a company ex. Square"
              />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
