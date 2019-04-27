import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Collapse, Button, CardBody, Card } from "reactstrap";

export default class Objections extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const {
      objections,
      resolvedObjections = [{ stageId: "qualification", questionIndex: 0 }]
    } = this.props;
    return (
      <Container>
        <Button
          outline
          color="warning"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}>
          Objections
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <ListGroup variant="flush">
                {objections.map((objection, index) => {
                  const itemStyle = {
                    textDecoration: resolvedObjections.find(
                      resolvedObjection => {
                        return (
                          resolvedObjection.stageId === objection.stageId &&
                          resolvedObjection.questionIndex ===
                            objection.questionIndex
                        );
                      }
                    )
                      ? "line-through"
                      : "none"
                  };
                  return (
                    <ListGroup.Item variant="warning" key={index}>
                      {objection.text.split("\n").map((line, index) => {
                        return (
                          <p style={itemStyle} key={index}>
                            {line}
                          </p>
                        );
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
