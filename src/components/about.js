import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class About extends Component {
  render() {
    if (this.props.data) {
      var about = this.props.data.aboutLine;
      var city = this.props.data.contact.city;
      var state = this.props.data.contact.state;
      var country = this.props.data.contact.country;
      var phone = this.props.data.contact.phone;
      var email = this.props.data.contact.email;
    }

    return (
      <section id="about">
        <Container className="sectionPadding">
          <Row>
            <Col lg={4}>
              <img
                className="profileImg mb-5"
                src="images/headshot.png"
                alt="Tyson Wright"
              />
            </Col>
            <Col lg={8}>
              <Row className="mb-4">
                <Col>
                  <h5 className="medium">{about}</h5>
                </Col>
              </Row>
              <Row xs={1} md={2}>
                <Col>
                  <h3 className="medium">Contact Details</h3>
                  <ul className="lists">
                    <li>
                      {city}, {state}
                    </li>
                    <li>{country}</li>
                    <li>{phone}</li>
                    <li>{email}</li>
                  </ul>
                </Col>
                <Col className="d-flex">
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="m-auto"
                    id="resume-btn"
                  >
                    Download Resume
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
