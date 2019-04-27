import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const NewsItem = props => {
  const { title, author, url, urlToImage, description, publishedAt } = props;

  return (
    <Col>
      <Card>
        <Card.Header style={{ fontWeight: "bold" }}>
          <a href={url}>{title}</a>{" "}
        </Card.Header>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <blockquote className="blockquote mb-0" style={{ fontSize: ".8rem" }}>
            <p>{description}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
          <Card.Link style={{ fontSize: ".65rem" }}>{publishedAt}</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsItem;
