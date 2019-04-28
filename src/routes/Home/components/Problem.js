import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

const Problem = () => {
  return (
    <Container>
      <Container className="d-flex justify-content-center ">
        <Badge variant="warning">
          <h3>Sales Team Challenges</h3>
        </Badge>
      </Container>
      <br />
      <Row>
        <Col>
          <Card className="p-3">
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/26gJzZgwf03hHuwFO/giphy.gif"
            />
            <blockquote className="blockquote mb-0 card-body">
              <p>
                "I'm tired of relying on my gut feeling for a sale only to find
                out 3 months later the opportunity was garbage"
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Individual Contributor
                  <cite title="Source Title">-> Sales Rep</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/TIiATEizlRKUWVgIWR/giphy.gif"
            />
            <blockquote className="blockquote mb-0 card-body">
              <p>
                " It's hard to manage my reps because we don't have clear
                metrics on what qualifies as a good sales meeting and the
                nuances of a sales conversation, therefore, I don't know if we
                are going to hit our quota"
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Manager
                  <cite title="Source Title"> -> Sales Manager</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Col>

        <Col>
          <Card className="p-3">
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/3d8JUdvItt6OA/giphy.gif"
            />
            <blockquote className="blockquote mb-0 card-body">
              <p>
                "I am worried that our sales team don't understand the metrics
                behind a qualified opportunity; consequently, its hard to
                provide good sales forecast"
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Executive
                  <cite title="Source Title"> -> VP Sales </cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default Problem;
