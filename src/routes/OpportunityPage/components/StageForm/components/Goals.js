import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Collapse, Button, CardBody, Card } from "reactstrap";

export default class Goals extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <Container>
        <Button
          color="success"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}>
          Customer Goals
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <ListGroup variant="flush">
                <ListGroup.Item variant="primary">
                  Metrics: "Lorem Ipsum je demonstrativní výplňový text
                  používaný v tiskařském a knihařském průmyslu. "
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  Need: "Lorem Ipsum jest tekstem stosowanym jako przykładowy
                  wypełniacz w przemyśle poligraficznym. "
                </ListGroup.Item>
              </ListGroup>
            </CardBody>
          </Card>
        </Collapse>
      </Container>
    );
  }
}
