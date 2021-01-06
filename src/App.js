import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";

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
      </div>
    );
  }
}

export default App;
