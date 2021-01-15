import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var credit = this.props.data.credit;
      var tech = this.props.data.tech;
    }

    return (
      <section id="footer" className="footerPadding">
        <Container>
          <Row>
            <Col>
              <h5 className="medium">{credit}</h5>
            </Col>
            <Col>
              <h5 className="medium">{tech}</h5>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Footer;
