import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ConsequencesModal extends Component {

  handleClose = () => {
    this.props.toggleConsequencesModal(this.props.modalType);
  }
  render() {
    const {showConsequencesModal, modalType, addBubble} = this.props;
    return (
      <Modal show={showConsequencesModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant='info' onClick={() => addBubble("short-term")}>Short-term</Button>
          <Button variant='info' onClick={() => addBubble("long-term")}>Long-term</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ConsequencesModal;
