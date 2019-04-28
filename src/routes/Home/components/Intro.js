import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

export default class Intro extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Container>
        {/* <Container className="d-flex justify-content-center bg-success">
          <h1>Qualified:</h1>
          <span>
            <h4> Score Your Sales Conversations</h4>
          </span>
        </Container> */}
        <br />
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://mk0herothemesupv2k6v.kinstacdn.com/wp-content/uploads/net-promoter-score.png"
              alt="set-metrics"
            />
            <Carousel.Caption>
              <h3 className="bg-dark">Set Meeting Metrics</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/open%20graph.jpg"
              alt="evaluate-score"
            />

            <Carousel.Caption>
              <h3 className="bg-dark">Evaluate Opportunity Score</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://onlinepaydayloansnow.co/wp-content/uploads/2019/01/Revenue-is-Sales.png"
              alt="get-sales"
            />

            <Carousel.Caption>
              <h3 className="bg-dark">Be Confident of a Sale</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
      </Container>
    );
  }
}
