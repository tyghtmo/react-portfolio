import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <Container key={education.degree} className="mb-5">
            <Row>
              <Col>
                <h2 className="thin">{education.degree}</h2>
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
                <h2 className="thin">{work.title}</h2>
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
                    return <li key={description}>-&emsp;{description}</li>;
                  })}
                </ul>
                {/* <p className="medium">{work.description}</p> */}
              </Col>
            </Row>
          </Container>
        );
      });

      var projects = this.props.data.projects.map(function (project) {
        var projectImage = "";
        if (project.link) {
          projectImage = (
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                className="projectImg"
                src={project.image}
                alt={project.title}
              />
            </a>
          );
        } else {
          projectImage = (
            <img
              className="projectImg"
              src={project.image}
              alt={project.title}
            />
          );
        }
        return (
          <Container key={project.title} className="mb-5">
            <Row className="mb-3">
              <Col>
                <h2 className="thin">{project.title}</h2>
              </Col>
            </Row>
            <Row xs={1}>
              <Col>{projectImage}</Col>
              <Col>
                <p className="medium text-left">{project.description}</p>
              </Col>
              <Col>
                <p className="medium">
                  Technologies used: {project.technology}
                </p>
              </Col>
            </Row>
          </Container>
        );
      });
    }

    return (
      <section id="resume">
        <Container className="sectionPadding">
          <Row id="education">
            <Col md={3} className="text-right">
              <h1 className="thin">Education</h1>
            </Col>
            <Col md={9} className="ml-auto mr-auto">
              {education}
            </Col>
          </Row>
          <hr className="horizontalRule" />
          <Row className="mt-4" id="work">
            <Col md={3} className="text-right">
              <h1 className="thin">Work</h1>
            </Col>
            <Col md={9} className="ml-auto mr-auto">
              {work}
            </Col>
          </Row>
          <hr className="horizontalRule" />
          <Row className="mt-4" id="projects">
            <Col md={3} className="text-right">
              <h1 className="thin">Projects</h1>
            </Col>
            <Col md={9} className="ml-auto mr-auto">
              {projects}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Resume;
