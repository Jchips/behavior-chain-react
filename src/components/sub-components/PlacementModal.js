import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class PlacementModal extends Component {
  // Closes the placement modal
  handleClose = () => {
    this.props.togglePlacementModal(this.props.modalType);
  }

  render() {
    const {showPlacementModal, modalType, placement} = this.props;
    return (
      <Modal show={showPlacementModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Where do you want your {modalType} text box inserted?</p>
          <div className="modal-btns">
            <Button variant='info' onClick={() => placement("vulnerability factors", "after")}>After vulnerability factors</Button>
            <Button variant='info' onClick={() => placement("prompting event", "after")}>After prompting event</Button>

            <Button variant='info' onClick={() => placement("emotions", "after")}>After emotions</Button>
            <Button variant='info' onClick={() => placement("emotions", "before")}>Before emotions</Button>

            <Button variant='info' onClick={() => placement("target behavior", "after")}>After target behavior</Button>
            <Button variant='info' onClick={() => placement("target behavior", "before")}>Before target behavior</Button>

            <Button variant='info' onClick={() => placement("short-term consequences", "after")}>After short-term consequences</Button>
            <Button variant='info' onClick={() => placement("long-term consequences", "after")}>After long-term consequences</Button>
            
            <Button variant='info' onClick={() => placement("short-term consequences", "before")}>Before short-term consequences</Button>
            <Button variant='info' onClick={() => placement("long-term consequences", "before")}>Before long-term consequences</Button>
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

export default PlacementModal;
