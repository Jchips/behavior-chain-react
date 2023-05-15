import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class ExtraModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    }
  }

  handleClose = () => {
    this.props.toggleExtraModal(this.state.type);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    // console.log(formData); // delete later
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // delete later
    // set this.state.type to equal whatever the user inputs in the form control
    this.setState({type: formJson.bubbleTitle}, () => this.props.togglePlacementModal(this.state.type));
    // this.props.togglePlacementModal(this.state.type);
  }
  render() {
    const {showExtraModal} = this.props;
    return (
      <Modal show={showExtraModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Extra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bubble title</Form.Label>
              <Form.Control type="text" name="bubbleTitle" placeholder="Enter title" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
}

export default ExtraModal;
