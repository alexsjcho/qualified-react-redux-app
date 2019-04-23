import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class CreateOppModal extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      formData: []
    });
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleFormSubmit}>
          <Button variant="outline-primary" onClick={this.handleShow}>
            Create Opportunity
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Opportunity Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formOpportunityName">
                <Form.Label>Opportunity Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="AirBnB Finance Department Q3 2019"
                />
              </Form.Group>

              <Form.Group controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="AirBnb" />
              </Form.Group>

              <Form.Group controlId="formCloseDate">
                <Form.Label>Close Date</Form.Label>
                <Form.Control type="number" placeholder="9-03-2019" />
              </Form.Group>

              <Form.Group controlId="formDollarValue">
                <Form.Label>DollarValue</Form.Label>
                <Form.Control type="number" placeholder="$15,000" />
              </Form.Group>

              <Form.Group controlId="formStage">
                <Form.Label>Stage</Form.Label>
                <Form.Control type="text" placeholder="Qualification" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </>
    );
  }
}
