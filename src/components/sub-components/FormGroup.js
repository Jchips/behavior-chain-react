import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class FormGroup extends Component {
  render() {
    // let link = this.props.link;
    // let removeBubble = this.props.removeBubble;
    let {link, removeBubble, id} = this.props;
    return (
      <Form.Group className="mb-3" controlId={id}>

        {/* As long as the bubble isn't any of the required ones, then add a remove button */}
        {(link !== "vulnerability factors" && link !== "target behavior" && link !== "prompting event" && link !== "solutions") ?
          <Button className="remove-button" variant="danger" type="button" onClick={() => removeBubble(link)}>X</Button>  :
          null
        }
        <Form.Label>{link}</Form.Label>
        <Form.Control as="textarea" rows={3} name={`${link}-${id}`}/>
      </Form.Group>
    );
  }
}

export default FormGroup;
