import React, { Component } from "react";
import Render from "../Render";
import FormGroup from "../sub-components/FormGroup";
import { Form, Button } from "react-bootstrap";
import html2canvas from 'html2canvas';
import ChainBubble from '../../js/chainBubble';
import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullChain: [],
      showChain: false,
      showDownloadBtn: false
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

    // Sets the data property for each object in links to whatever values the user inputted.
    Object.entries(formJson).forEach(([key, value], index) => {
      this.props.links[index].data = value;
    });
    this.renderEachChainBubble();
    this.setState({ showDownloadBtn: true })
  }

  /**
   * Creates a visual bubble (link) for each Form.Group (bubble or link) the user filled out.
   * Makes the rendered chain appear on the webpage.
   */
  renderEachChainBubble() {
    let fullChain = this.props.links.map(chainBubble => {
      return new ChainBubble(chainBubble.name, chainBubble.data, chainBubble.id, chainBubble.className);
    })
    this.setState({ showChain: true, fullChain: fullChain });
  }

  /**
   * Resets the create a behavior chain form.
   * Clears the behavior chain of all content.
   * Hides the rendered behavior chain until user presses submit again.
   */
  resetForm = () => {
    document.getElementById('render-form').reset(); // clears form
    this.setState({ fullChain: [], showChain: false, showDownloadBtn: false })
  }

  /**
   * Downloads a screenshot of the renderered behavior chain for user to keep.
   * Code from Mohit K on https://stackoverflow.com/questions/10721884/render-html-to-an-image
   */
  download = () => {
    html2canvas(document.querySelector(".rendered-behavior-chain"))
      .then(canvas => {
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.download = "behavior-chain.png";
        a.href = canvas.toDataURL();
        a.click();
      });
  }

  render() {
    const { links, removeBubble } = this.props;
    return (
      <main className="row">
        <section className="col-xl-5 col-lg-5 col-md-7 col-sm-7 col-12">
          <h2>Fill out to get your completed behavior chain</h2>
          <Form id="render-form" className="text-center" onSubmit={this.handleSubmit}>
            {links.map(link =>
              <FormGroup link={link} removeBubble={removeBubble} key={link.id} id={link.id} />
            )}
            <Button className="text-center" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div className="btns text-center">
            <Button className="reset-btn" variant="danger" type="button" onClick={this.resetForm}>
              Reset
            </Button>
            {this.state.showDownloadBtn && (
              <Button className="download-btn" variant="info" type="button" onClick={this.download}>Download</Button>
            )}
          </div>
        </section>
        <Render links={links} showChain={this.state.showChain} fullChain={this.state.fullChain} renderEachChainBubble={this.renderEachChainBubble} />
      </main>
    );
  }
}

export default Main;
