import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const KEY = "a310131ea6924d1591c9630b13d83e68";
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${KEY}`;
    let request = new Request(url);

    fetch(request)
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data.articles
        });
      })
      .catch(event => console.log("Damn it"));
  }

  render() {
    return (
      // <Col>
      //   {this.state.articles.map((item, index) => {
      //     return (
      //       <Card>
      //         <Card.Header style={{ fontSize: ".9rem" }}>
      //           {item.title}
      //         </Card.Header>
      //         <Card.Img variant="top" src={item.urlToImage} />
      //         <Card.Body>
      //           <blockquote
      //             className="blockquote mb-0"
      //             style={{ fontSize: ".8rem" }}>
      //             <p>{item.description}</p>
      //             <footer className="blockquote-footer">
      //               <cite title="Source Title">{item.source}</cite>
      //               <cite title="Source Date">{item.publishedAt}</cite>
      //             </footer>
      //           </blockquote>
      //           <Card.Link style={{ fontSize: ".65rem" }} href="source.url">
      //             <a href={item.url}>Read More</a>
      //           </Card.Link>
      //         </Card.Body>
      //       </Card>
      //     );
      //   })}
      // </Col>
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
