import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Contact data={this.state.portfolioData.about}/>
        <Footer data={this.state.portfolioData.footer} />
      </div>
    );
  }
}

export default App;
