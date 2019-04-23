import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Collapse, Button, CardBody, Card } from "reactstrap";

export default class PainPoints extends React.PureComponent {
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
          color="danger"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}>
          Pain Points
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <ListGroup variant="flush">
                <ListGroup.Item variant="danger">
                  Problems: "Lorem Ipsum，也称乱数假文或者哑元文本，
                  是印刷及排版领域所常用的虚拟文字。"{" "}
                </ListGroup.Item>
                <ListGroup.Item variant="warning">
                  Painpoints: "Lorem Ipsum jest tekstem stosowanym jako
                  przykładowy wypełniacz w przemyśle poligraficznym. "
                </ListGroup.Item>
                <ListGroup.Item variant="warning">
                  Implications: "O Lorem Ipsum é um texto modelo da indústria
                  tipográfica e de impressão. "
                </ListGroup.Item>
              </ListGroup>
            </CardBody>
          </Card>
        </Collapse>
      </Container>
    );
  }
}

// Negotiation Stage  Summary UI Render
// {
//     "summary": [
//       {
//         "problem": {},
//         "implication": {},
//         "need": {},
//         "metrics": {},
//         "identifyPain": {}
//       }
//     ]
//   },

// Demo Stage  Summary UI Render
//    {
//     "summary": [
//       {
//         "problem": {},
//         "implication": {},
//         "need": {},
//         "metrics": {},
//         "identifyPain": {}
//       }
//     ]
//   },
