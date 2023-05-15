import React, { Component } from "react";
import Render from "../components/Render";
import FormGroup from "./sub-components/FormGroup";
import { Form, Button } from "react-bootstrap";
// import PlacementModal from "./sub-components/PlacementModal";

class Main extends Component {

  /**
   * Renders the behavior chain based on the user's form input
   * @param {Event} e - The submit event when the user submits the behavior chain form.
   */
  handleSubmit = (e) => {
    e.preventDefault(); // prevents instant refresh
    let form = e.target;
    let formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log('render form: ', formJson);
  }
  
  render() {
    const {links, removeBubble} = this.props;
    return (
      <main>
        <section>
          <Form onSubmit={this.handleSubmit}>
            {links.map(link =>
              <FormGroup link={link} removeBubble={removeBubble} key={link.id} id={link.id}/>
            )}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </section>
        <Render />
      </main>
    );
  }
}

export default Main;
