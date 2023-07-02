import React, { Component } from 'react';

class Sidebar extends Component {

  // runAddBubble = (type) => {
  //   this.props.addBubble(type);
  // }
  render() {
    // let addBubble = this.props.addBubble;
    // let addLinks = this.props.addLinks;
    const { addBubble, togglePlacementModal, toggleConsequencesModal, extraBubble} = this.props;
    return (
      <aside>
        <button id="add-links-btn" type="button" className="btn btn-light" onClick={() => togglePlacementModal('link')}>Add Link</button>
        <button id="add-emotions-btn" type="button" className="btn btn-light" onClick={() => addBubble('emotions')}>Add Emotions</button>
        <button id="add-consequences-btn" type="button" className="btn btn-light" onClick={() => toggleConsequencesModal('consequences')}>Add Consequences</button>
        <button id="add-extra-btn" type="button" className="btn btn-light" onClick={() => extraBubble()}>Add Custom</button>
      </aside>
    );
  }
}

export default Sidebar;
