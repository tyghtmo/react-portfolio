import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    if (this.props.data) {
      //   Set props here
    }

    return (
      //   Add HTML here
      <section id="contact">
        <Container>
          <Row>
            <Col sm={3} className="text-right mb-4">
              <FontAwesomeIcon icon={faEnvelope} size="4x" className="icon" />
            </Col>
            <Col>
              <h1 className="thin">Contact</h1>
            </Col>
          </Row>
          <Form>
            <Form.Group as={Row} controlId="contactFormName">
              <Form.Label column="true" sm={3} className="text-right">
                <h4 className="thin">Name</h4>
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" className="h-100" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="contactFormSubject">
              <Form.Label column="true" sm={3} className="text-right">
                <h4 className="thin">Subject</h4>
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" className="h-100" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="contactFormMessage">
              <Form.Label column="true" sm={3} className="text-right">
                <h4 className="thin">Message</h4>
              </Form.Label>
              <Col column="true" sm={9}>
                <Form.Control as="textarea" rows={3} />
                <Button
                  variant="outline-light"
                  type="submit"
                  className="w-100 mt-3"
                  id="contactSubmit"
                >
                  Send
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </section>
    );
  }
}

export default Contact;
