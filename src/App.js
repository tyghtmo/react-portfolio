import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import About from "./components/about"
import Resume from "./components/resume"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      portfolioData: {},
    };
  }

  componentDidMount() {
    const that = this;

    fetch("portfolioData.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        that.setState({ portfolioData: jsonData });
      })
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.portfolioData.main} />
        <About data={this.state.portfolioData.about} />
        <Resume data={this.state.portfolioData.resume} />
        <div className="filler"></div>
      </div>
    );
  }
}

export default App;
