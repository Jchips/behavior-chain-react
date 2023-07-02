import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class FormGroup extends Component {
  render() {
    // let {link, removeBubble, id} = this.props;
    let {link, removeBubble} = this.props;
    return (
      <Form.Group className="mb-3 form-group" controlId={link.id}>
        {/* As long as the bubble isn't any of the required ones, then add a remove button */}
        {(link.name !== "vulnerability factors" && link.name !== "target behavior" && link.name !== "prompting event" && link.name !== "solutions") ?
          <Button className="remove-button" variant="danger" type="button" onClick={() => removeBubble(link.id)}>X</Button>  :
          null
        }
        <Form.Label>{link.name}</Form.Label>
        <Form.Control as="textarea" rows={3} name={`${link.name}-${link.id}`}/>
      </Form.Group>
    );
  }
}

export default FormGroup;
