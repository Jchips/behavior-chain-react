import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class ExtraModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    }
  }

  /**
   * Closes the extra bubble modal.
   */
  handleClose = () => {
    this.props.toggleExtraModal(this.state.type);
  }

  /**
   * Gets the user's chosen bubble (link) title (form data) and invokes the placement
   * modal with the title.
   * @param {Event} e - the submit event from submitting the extra bubble modal form.
   */
  handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // delete later
    this.setState({type: formJson.bubbleTitle}, () => this.props.togglePlacementModal(this.state.type));
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
              <p>What do you want to name this chain link?</p>
              <Form.Label>Chain link title</Form.Label>
              <Form.Control type="text" name="bubbleTitle" placeholder="Enter title" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ExtraModal;
