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
          <p>Choose a consequence type</p>
          <div className='modal-btns'>
            <Button variant='info' onClick={() => addBubble("short-term consequences")}>Short-term</Button>
            <Button variant='info' onClick={() => addBubble("long-term consequences")}>Long-term</Button>
          </div>
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
