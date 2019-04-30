import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

const Solution = () => {
  return (
    <Container>
      <Container className="d-flex justify-content-center">
        <Badge variant="success">
          <h3>Qualified </h3>
        </Badge>
      </Container>
      <br />
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.extradigital.co.uk/marketing-assets/articles/articles-l/metrics-lg.png"
            />
            <Card.Body>
              <Card.Title>1. Managers Set Metrics</Card.Title>
              <Card.Text>
                Customize type of questions: goals, painpoints, objections; and
                the amount of points for each pieces of sales information
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Based on SPIN, MEDDIC, BANT sales methodologies
              </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.1point21gws.com/insights/wp-content/uploads/2017/02/analytics_cover.png"
            />
            <Card.Body>
              <Card.Title>2. Select Tangible Scores </Card.Title>
              <Card.Text>
                For a sales rep, they are guided through what type of questions
                they should ask and the points associated with it. Or if a
                client brings up an objection, the negative points associated.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Score Calcaluated Opportunities and Meetings
              </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://marketingland.com/wp-content/ml-loads/2018/07/rocket-rockets-blast-off-shutterstock_566814361.jpg"
            />
            <Card.Body>
              <Card.Title>3. Make Better Decisions </Card.Title>
              <Card.Text>
                Using the power of tangible numbers, sales reps can rely on more
                than their gut feeling to judge the quality of an opportunity
                and save time by moving on to the next chase faster or be
                confident in a sale.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Data-Driven Decision</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default Solution;
