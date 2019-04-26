import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default class NewsSearchBar extends React.Component {
  onInputChange = event => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchQuery);
  };

  render() {
    const { defaultValue } = this.props;
    return (
      <Row>
        <Col>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Search a company ex. Square"
            defaultValue={defaultValue}
          />
        </Col>
      </Row>
    );
  }
}
