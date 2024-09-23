/**
 * Note: links and bubbles are the same thing. I haven't yet got to refactoring the code to just use one title yet.
 */

import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main/Main";
import PlacementModal from "./components/sub-components/PlacementModal";
import ConsequencesModal from "./components/ConsequencesModal";
import ExtraModal from "./components/ExtraModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { id: "vFactors", name: "vulnerability factors", className: "vFactors", data: "" },
        { id: "promptingEvent", name: "prompting event", className: "promptingEvent", data: "" },
        { id: "targetBehavior", name: "target behavior", className: "targetBehavior", data: "" },
        { id: "solutions", name: "solutions", className: "solutions", data: "" },
      ],
      linksCount: 4,
      showPlacementModal: false,
      showConsequencesModal: false,
      showExtraModal: false,
      modalType: "",
    };
  }

  /**
   * Adds a new bubble (or link) to the behavior chain.
   * It creates a copy of the chain (links state) and then
   * It slices the chain (array) state at the index after where you want to add the
   * bubble, and then add the new bubble there (using splice()).
   * Then it sets the chain (links state) to this modified new chain.
   * @param {String} bubbleType - The name of the bubble the user wants to add
   */
  addBubble = (bubbleType) => {
    let links = [...this.state.links]; // copies the array in state
    const newLinksCount = this.state.linksCount + 1;
    if (bubbleType === "emotions") {
      links.splice(
        links.findIndex((link) => link.name === "link") + 1 ||
        links.findIndex((link) => link.name === "prompting event") + 1,
        0,
        { id: newLinksCount, name: "emotions", className: "emotions", data: "" }
      );
    } else if (bubbleType === "short-term consequences") {
      links.splice(
        links.findIndex((link) => link.name === "target behavior") + 1,
        0,
        { id: newLinksCount, name: "short-term consequences", className: "short-term", data: "" }
      );
    } else if (bubbleType === "long-term consequences") {
      links.splice(
        links.findIndex((link) => link.name === "short-term consequences") + 1 ||
        links.findIndex((link) => link.name === "target behavior") + 1,
        0,
        { id: newLinksCount, name: "long-term consequences", className: "long-term", data: "" }
      );
    }
    this.setState({ links: links, linksCount: newLinksCount });
  };

  /**
   * Remove a bubble (or link) from the behavior chain.
   * First, creates a copy of the chain (links state) and then
   * It splices the chain (array) state using the id of the bubble.
   * Then sets the chain (links state) to this modified new chain.
   * @param {Number} bubbleTypeId - The id of the bubble the user wants to remove
   */
  removeBubble = (bubbleTypeId) => {
    let links = [...this.state.links]; // copies the array in state
    const newLinksCount = this.state.linksCount - 1;
    for (let i = 0; i < links.length; i++) {
      if (bubbleTypeId === links[i].id) {
        links.splice(
          links.findIndex((link) => link.id === bubbleTypeId),
          1
        );
      }
    }
    this.setState({ links: links, linksCount: newLinksCount });
  };

  /**
   * Inserts a new bubble (link) in place where user wants it inserted.
   * First, creates a copy of the chain (links state).
   * If the the bubble (link) user wants positioned before or after exists in the chain, it
   * adds the new bubble (link) after that one. Otherwise, it sends the user a
   * message.
   * Then sets the chain (links state) to this modified new chain.
   * @param {String} position - the position the user wants the bubble to be added after.
   * @param {String} beforeOrAfter - whether the bubble should be position before or after
   */
  placement = (position, beforeOrAfter) => {
    let links = [...this.state.links]; // copies the array in state
    const newLinksCount = this.state.linksCount + 1;
    if (links.findIndex((link) => link.name === position) !== -1) {
      if (beforeOrAfter === "after") {
        links.splice(
          links.findIndex((link) => link.name === position) + 1,
          0,
          { id: newLinksCount, name: this.state.modalType, className: this.state.modalType, data: "" }
        );
      } else if (beforeOrAfter === "before") {
        links.splice(
          links.findIndex((link) => link.name === position),
          0,
          { id: newLinksCount, name: this.state.modalType, className: this.state.modalType, data: "" }
        );
      }
    } else alert(`${position} bubble not added yet`);
    this.setState({ links: links, linksCount: newLinksCount });
  };

  /**
   * Shows the extra bubble modal.
   * Called in the Sidebar.js
   */
  extraBubble = () => {
    this.setState({ showExtraModal: true });
  };

  /**
   * Toggles the placement modal and sets the modalType state to whatever
   * the name of the bubble (link) the user wants to add is.
   * @param {String} type - the name of the bubble (link) the user wants to add.
   */
  togglePlacementModal = (type) => {
    console.log("type: ", type);
    this.setState({
      showPlacementModal: this.state.showPlacementModal ? false : true,
      modalType: type,
    });
  };

  /**
   * Toggles the consequences modal and sets the modalType state to whatever
   * the name of the bubble (link) the user wants to add is.
   * @param {String} type - the name of the bubble (link) the user wants to add.
   */
  toggleConsequencesModal = (type) => {
    this.setState({
      showConsequencesModal: this.state.showConsequencesModal ? false : true,
      modalType: type,
    });
  };

  /**
   * Toggles the extra bubble modal and sets the modalType state to whatever
   * the name of the bubble (link) the user wants to add is.
   * @param {String} type - the name of the bubble (link) the user wants to add.
   */
  toggleExtraModal = (type) => {
    this.setState({ showExtraModal: this.state.showExtraModal ? false : true });
  };

  render() {
    return (
      <div>
        <header className="bg-dark">
          <h1>Create a Behavior Chain</h1>
        </header>
        <Sidebar
          addBubble={this.addBubble}
          togglePlacementModal={this.togglePlacementModal}
          toggleConsequencesModal={this.toggleConsequencesModal}
          extraBubble={this.extraBubble}
        />
        <Main
          links={this.state.links}
          linksCount={this.state.linksCount}
          removeBubble={this.removeBubble}
        />
        <PlacementModal
          modalType={this.state.modalType}
          showPlacementModal={this.state.showPlacementModal}
          togglePlacementModal={this.togglePlacementModal} // closes modal
          placement={this.placement}
        />
        <ConsequencesModal
          modalType={this.state.modalType}
          showConsequencesModal={this.state.showConsequencesModal}
          toggleConsequencesModal={this.toggleConsequencesModal} // closes modal
          addBubble={this.addBubble}
        />
        <ExtraModal
          showExtraModal={this.state.showExtraModal}
          toggleExtraModal={this.toggleExtraModal} // closes modal
          togglePlacementModal={this.togglePlacementModal}
        />
      </div>
    );
  }
}

export default App;
