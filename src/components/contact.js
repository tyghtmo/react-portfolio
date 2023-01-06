import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      message: "",
    };
  }

  render() {
    if (this.props.data) {
      var email = this.props.data.contact.email;
    }

    const handleClick = (e) => {
      this.setState(
        {
          name: document.getElementById("contactFormName").value,
          subject: document.getElementById("contactFormSubject").value,
          message: document.getElementById("contactFormMessage").value,
        },
        function () {
          e.preventDefault();
          window.open(
            `mailto:${email}?subject=${this.state.name}: ${this.state.subject}&body=${this.state.message}`
          );
        }
      );
    };

    return (
      <section id="contact">
        <Container fluid="xxl">

          <Row className="mb-4">
            <Col sm={3} className="text-right">
              <h1 className="thin">Contact</h1>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faEnvelope} size="4x" className="icon" />

            </Col>
          </Row>
          <Form id="contactForm">
            <Form.Group as={Row} controlId="contactFormName">
              <Form.Label column="true" sm={3} className="text-right">
                <h3 className="thin">Name</h3>
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" className="h-100" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="contactFormSubject">
              <Form.Label column="true" sm={3} className="text-right">
                <h3 className="thin">Subject</h3>
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" className="h-100" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="contactFormMessage">
              <Form.Label column="true" sm={3} className="text-right">
                <h3 className="thin">Message</h3>
              </Form.Label>
              <Col column="true" sm={9}>
                <Form.Control as="textarea" rows={3} />
                <Button
                  variant="light"
                  type="submit"
                  className="w-25 mt-3"
                  id="contactSubmit"
                  onClick={handleClick}
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
