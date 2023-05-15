import React, { Component } from "react";
import Render from "../components/Render";
import FormGroup from "./sub-components/FormGroup";
import { Form, Button } from "react-bootstrap";
// import PlacementModal from "./sub-components/PlacementModal";

class Main extends Component {
  handleSubmit = (e) => {
    e.preventDefault(); // prevents instant refresh
    let form = e.target;
    let formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log('render form: ', formJson);
  }
  
  render() {
    // const {links, showPlacementModal, togglePlacementModal, modalType} = this.props;
    const {links, removeBubble} = this.props;

    // let links = this.props.links;
    return (
      <main>
        <section>
          <Form onSubmit={this.handleSubmit}>
            {links.map((link, index) =>
              <FormGroup link={link} removeBubble={removeBubble} key={index} id={index}/>
            )}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {/* <PlacementModal
            modalType={modalType}
            showPlacementModal={showPlacementModal} 
            togglePlacementModal={togglePlacementModal}
          /> */}
        </section>
        <Render />
      </main>
    );
  }
}

export default Main;
