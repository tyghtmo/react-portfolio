import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <Container key={education.degree} className="mb-4">
            <Row>
              <Col>
                <h3 className="thin">{education.degree}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="medium">
                  {education.school} | {education.dates}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="medium">{education.description}</p>
              </Col>
            </Row>
          </Container>
        );
      });

      var work = this.props.data.work.map(function (work) {
        return (
          <Container key={work.company} className="mb-5">
            <Row>
              <Col>
                <h3 className="thin">{work.title}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="medium">
                  {work.company} | {work.years}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul className="lists text-left">
                  {work.description.map((description) => {
                    return <li key={description}>{description}</li>;
                  })}
                </ul>
                {/* <p className="medium">{work.description}</p> */}
              </Col>
            </Row>
          </Container>
        );
      });

      var projects = this.props.data.projects.map(function (project) {
        return (
          <Container key={project.title}>
            <Row>
              <Col>
                <h3 className="thin">{project.title}</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={7}>
                <img className="projectImg" src={project.image} alt={project.title} />
              </Col>
              <Col>
                <p className="medium">{project.description}</p>
              </Col>
            </Row>
          </Container>
        );
      });
    }

    return (
      <section id="resume">
        <Container className="sectionPadding">
          <Row>
            <Col className="text-right">
              <h2 className="thin">Education</h2>
            </Col>
            <Col xs={9} className="m-auto">
              {education}
            </Col>
          </Row>
          <hr className="horizontalRule" />
          <Row className="mt-4">
            <Col className="text-right">
              <h2 className="thin">Work</h2>
            </Col>
            <Col xs={9} className="m-auto">
              {work}
            </Col>
          </Row>
          <hr className="horizontalRule" />
          <Row className="mt-4">
            <Col className="text-right">
              <h2 className="thin">Projects</h2>
            </Col>
            <Col xs={9} className="m-auto">
              {projects}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Resume;
