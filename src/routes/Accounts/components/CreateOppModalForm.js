import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class CreateOppModalForm extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      formData: {}
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { createOpportunity } = this.props;
    const form = event.target;
    createOpportunity({
      companyName: form.companyName.value,
      opportunityName: form.opportunityName.value,
      closeDate: form.closeDate.value,
      moneyValue: form.moneyValue.value
    });
  };

  render() {
    return (
      <div>
        <Button variant="outline-primary" onClick={this.handleShow}>
          Create Opportunity
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form
            as="form"
            onSubmit={this.handleFormSubmit}
            style={{ marginTop: "15px" }}>
            <Modal.Header closeButton>
              <Modal.Title>Opportunity Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group controlId="formOpportunityName">
                <Form.Label>Opportunity Name</Form.Label>
                <Form.Control
                  name="opportunityName"
                  type="text"
                  placeholder="AirBnB Finance Department Q3 2019"
                />
              </Form.Group>

              <Form.Group controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  name="companyName"
                  type="text"
                  placeholder="AirBnb"
                />
              </Form.Group>

              <Form.Group controlId="formCloseDate">
                <Form.Label>Close Date</Form.Label>
                <Form.Control
                  name="closeDate"
                  type="date"
                  placeholder="9-03-2019"
                />
              </Form.Group>

              <Form.Group controlId="formDollarValue">
                <Form.Label>Dollar Value</Form.Label>
                <Form.Control
                  name="moneyValue"
                  type="number"
                  placeholder="$15,000"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose} variant="secondary">
                Close
              </Button>
              <Form.Control type="submit" variant="primary" value="Submit" />
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}
