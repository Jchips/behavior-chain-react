import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import PlacementModal from "./components/sub-components/PlacementModal";
import ConsequencesModal from "./components/ConsequencesModal";
import ExtraModal from "./components/ExtraModal";
// import FormGroup from './components/sub-components/FormGroup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        "vulnerability factors",
        "prompting event",
        "target behavior",
        "solutions",
      ],
      showPlacementModal: false,
      showConsequencesModal: false,
      showExtraModal: false,
      modalType: ""
    };
  }

  addBubble = (bubbleType) => {
    let links = [...this.state.links]; // copies the array in state
    if (bubbleType === "emotions") {
      links.splice(links.indexOf("links") + 1 || links.indexOf("prompting event") + 1, 0, "emotions");
    } else if (bubbleType === "short-term") {
      links.splice(links.indexOf("target behavior") + 1, 0, "short-term");
    } else if (bubbleType === "long-term") {
      links.splice(links.indexOf("short-term") + 1 || links.indexOf("target behavior") + 1, 0, "long-term");
    }
    this.setState({ links: links });
  };

  removeBubble = bubbleType => {
    let links = [...this.state.links]; // copies the array in state
    for (let i = 0; i < links.length; i++) {
      if (bubbleType === links[i]) {
        console.log("here");
        links.splice(links.indexOf(bubbleType), 1);
      }
    }
    this.setState({links})
  }

  placement = (position) => {
    // if(this.state.modalType === "extra") {}this.extraBubble()
    let links = [...this.state.links]; // copies the array in state
    let positions = ['vulnerability factors', 'prompting event', 'emotions', 'target behavior', 'consequences'];
    console.log('modal type:', this.state.modalType); // delete later
    for(let i = 0; i < positions.length; i++) {
      if (position === positions[i]) {
        if (links.indexOf(position) !== -1) links.splice(links.indexOf(position) + 1, 0, this.state.modalType);
        else alert(`${position} bubble not added yet`);
      }
    }
    this.setState({ links: links });
  }

  extraBubble = () => {
    // Show an ExtraModal with a form in it for user to input the name of the bubble.
    this.setState({showExtraModal: true})
    // then set this.state.modalType to the user's submission.
    // then carry on in the placement function.
  }

  togglePlacementModal = (type) => {
    console.log('type: ', type);
    this.setState({
      showPlacementModal: this.state.showPlacementModal ? false : true, modalType: type
    });
  };

  toggleConsequencesModal = (type) => {
    this.setState({
      showConsequencesModal: this.state.showConsequencesModal ? false : true, modalType: type
    });
  };

  toggleExtraModal = (type) => {
    this.setState({showExtraModal: this.state.showExtraModal ? false : true});
  }

  // changeModalType = (type) => {
  //   this.setState({modalType: type});
  // }

  render() {
    console.log(this.state.links); // delete later
    return (
      <div>
        <Sidebar 
          addBubble={this.addBubble}
          togglePlacementModal={this.togglePlacementModal}
          toggleConsequencesModal={this.toggleConsequencesModal}
          extraBubble={this.extraBubble}
        />
        <Main
          links={this.state.links}
          removeBubble={this.removeBubble}
          // modalType={this.state.modalType}
          // showPlacementModal={this.state.showPlacementModal}
          // togglePlacementModal={this.togglePlacementModal}
        />
         <PlacementModal
            modalType={this.state.modalType}
            showPlacementModal={this.state.showPlacementModal} 
            togglePlacementModal={this.togglePlacementModal} // closes modal
            // addBubble={this.addBubble}
            placement={this.placement}
          />
          <ConsequencesModal 
            modalType={this.state.modalType}
            showConsequencesModal={this.state.showConsequencesModal} 
            toggleConsequencesModal={this.toggleConsequencesModal} // closes modal
            addBubble={this.addBubble}
          />
          <ExtraModal 
            // modalType={this.state.modalType}
            showExtraModal={this.state.showExtraModal}
            // changeModalType={this.changeModalType}
            toggleExtraModal={this.toggleExtraModal} // closes modal
            togglePlacementModal={this.togglePlacementModal}
          />
      </div>
    );
  }
}

export default App;
