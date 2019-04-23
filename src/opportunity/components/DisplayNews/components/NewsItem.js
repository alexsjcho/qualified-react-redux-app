import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default class NewsItem extends React.Component {
  render() {
    return (
      <Col>
        <Card>
          <Card.Header>source.title</Card.Header>
          <Card.Img
            variant="top"
            src="https://i.kinja-img.com/gawker-media/image/upload/s--38Ursq9w--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/k4srvcswpharsa40kikj.jpg"
          />
          <Card.Body>
            <blockquote
              className="blockquote mb-0"
              style={{ fontSize: ".8rem" }}>
              <p>source.description</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">source.name</cite>
              </footer>
            </blockquote>
            <Card.Link style={{ fontSize: ".65rem" }} href="source.url">
              News URL
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
