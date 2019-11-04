import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  state = {
    monsters: [
      { name: "Frankenstein", id: "asc1" },
      { name: "Dracula", id: "asc2" },
      { name: "Zombie", id: "asc3" }
    ]
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          monsters: data
        });
      });
  }

  render() {
    return (

      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
