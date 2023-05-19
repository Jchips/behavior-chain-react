import React, { Component } from "react";
import Render from "../Render";
import FormGroup from "../sub-components/FormGroup";
import { Form, Button } from "react-bootstrap";
import ChainBubble from '../../js/chainBubble';
import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullChain: [],
      showChain: false
    }
  }
  /**
   * Renders the behavior chain based on the user's form input
   * @param {Event} e - The submit event when the user submits the behavior chain form.
   */
  handleSubmit = (e) => {
    e.preventDefault(); // prevents instant refresh
    let form = e.target;
    let formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log('render form: ', formJson); // delete later
  
    // Sets the data property for each object in links to whatever values the user inputted.
    Object.entries(formJson).forEach(([key, value], index) => {
      this.props.links[index].data = value;
    });
    console.log(this.props.links); // delete later
    this.renderEachChainBubble();
  }

  /**
   * Creates a visual bubble (link) for each Form.Group (bubble or link) the user filled out.
   * Makes the rendered chain appear on the webpage.
   */
  renderEachChainBubble() {
    let fullChain = this.props.links.map(chainBubble => {
      return new ChainBubble(chainBubble.name, chainBubble.data, chainBubble.id);
    })
    this.setState({showChain: true});
    this.setState({fullChain});
  }

  /**
   * Resets the create a behavior chain form.
   * Clears the behavior chain of all content.
   * Hides the rendered behavior chain until user presses submit again.
   */
  resetForm = () => {
    document.getElementById('render-form').reset(); // clears form
    this.setState({fullChain: []});
    this.setState({showChain: false})
  }
  
  render() {
    const {links, removeBubble} = this.props;
    return (
      <main className="row">
        <section className="col-xl-5 col-lg-5 col-md-7 col-sm-7 col-12">
          <h2>Fill out to get your completed behavior chain</h2>
          <Form id="render-form" className="text-center" onSubmit={this.handleSubmit}>
            {links.map(link =>
              <FormGroup link={link} removeBubble={removeBubble} key={link.id} id={link.id}/>
            )}
            <Button className="text-center" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div class="btns text-center">
            <Button className="text-center" variant="danger" type="button" onClick={this.resetForm}>
              Reset
            </Button>
          </div>
        </section>
        {/* <div className=""> */}
          <Render links={links} showChain={this.state.showChain} fullChain={this.state.fullChain} renderEachChainBubble={this.renderEachChainBubble}/>
        {/* </div> */}
      </main>
    );
  }
}

export default Main;
