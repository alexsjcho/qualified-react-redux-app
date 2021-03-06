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
    const { goals } = this.props;
    return (
      <Container>
        <Button
          outline
          color="success"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}>
          Goals
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <ListGroup variant="flush">
                {goals.map((goal, index) => {
                  return (
                    <ListGroup.Item variant="success" key={index}>
                      {goal.split("\n").map((line, index) => {
                        return <p key={index}>{line}</p>;
                      })}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </CardBody>
          </Card>
        </Collapse>
      </Container>
    );
  }
}
