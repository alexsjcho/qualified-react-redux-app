import React, { Fragment } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Info = () => {
  return (
    <Fragment>
      <Container>
        <Container className="d-flex justify-content-center ">
          <Badge variant="secondary">
            <h3>About This Project</h3>
          </Badge>
        </Container>
        <br />
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.giphy.com/media/4Jn9m3jXsmeZi/giphy.gif"
              />
              <Card.Body>
                <Card.Title>Project Management </Card.Title>
                <Card.Text>
                  Check out my Trello cards to manage feature implementations on
                  this project
                </Card.Text>
                <Button variant="warning">
                  <a
                    style={{ color: "white" }}
                    href="https://trello.com/b/aQDwaNUn/smartokrs">
                    Trello Board
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.productplan.com/wp-content/uploads/2017/02/Filter-Product-Roadmap.gif"
              />
              <Card.Body>
                <Card.Title> Product Roadmap </Card.Title>
                <Card.Text>
                  Check out my Google Sheet product development planning
                </Card.Text>
                <Button variant="primary">
                  <a
                    style={{ color: "white" }}
                    href="https://docs.google.com/spreadsheets/d/1TXtMZzuoYQbTcidbsaGsN8lnYE67iHUw5Hx8yiXkN7E/edit?usp=sharing">
                    Google Sheets
                  </a>{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
              />
              <Card.Body>
                <Card.Title>Source Code</Card.Title>
                <Card.Text>
                  Check out my source code implementation of: React, Redux,
                  Bootstrap, Javascript, and other libraries to accomplish this
                  project
                </Card.Text>
                <Button variant="success">
                  <a
                    style={{ color: "white" }}
                    href="https://github.com/alexsjcho/smart-okr-react-app">
                    GitHub Repo
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.mraddoil.com/wp-content/uploads/2018/12/SaaS-Sales-Right-for-You_.png"
              />
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>
                  Check out my blog post I wrote about my experience in software
                  sales
                </Card.Text>
                <Button variant="info">
                  {" "}
                  <a
                    style={{ color: "white" }}
                    href="https://www.mraddoil.com/2019/02/10/okrs-goal-management-framework/">
                    Read Blog
                  </a>{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
    </Fragment>
  );
};

export default Info;
