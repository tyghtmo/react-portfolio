import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
    }

    return (
      <header id="main" className="fullHeight">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant="dark"
          fixed="top"
          id="nav"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#main">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Button
                variant="light"
                size="sm"
                className="btn-toggle"
                id="themeSwitch"
              >
                Light Mode
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1 className="mainTitle thin">{name}</h1>
            </Col>
          </Row>
          <Row className="justify-content-center" xs={1}>
            <Col className="pb-2">
              <h3 className="thin">{occupation}.</h3>
            </Col>
            <Col className="pb-5">
              <h4 className="medium">{description}.</h4>
            </Col>
          </Row>
          <Row className="w-50 m-auto" xs={2}>
            <Col>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/tyghtmo"
              >
                <FontAwesomeIcon icon={faGithub} size="4x" className="icon" />
              </a>
            </Col>
            <Col>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/tysonwright259/"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="4x"
                  className="icon"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
