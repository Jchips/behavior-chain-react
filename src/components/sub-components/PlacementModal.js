import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class PlacementModal extends Component {
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
          <p>Where do you want your {modalType} bubble inserted?</p>
          {/* upgrade idea: loop through all values in links array and create button for each */}
          <Button variant='info' onClick={() => placement("vulnerability factors")}>After vulnerability factors</Button>
          <Button variant='info' onClick={() => placement("prompting event")}>After prompting event</Button>
          <Button variant='info' onClick={() => placement("emotions")}>After emotions</Button>
          <Button variant='info' onClick={() => placement("target behavior")}>After target behavior</Button>
          <Button variant='info' onClick={() => placement("consequences")}>After consequences</Button>
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
