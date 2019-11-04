import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          monsters: data
        });
      });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    console.log(filteredMonsters);

    return (
      <div className="App">

        <input
          type="search"
          placeholder="Search monsters..."
          onChange={e => this.setState({ searchField: e.target.value })}
          value={this.state.searchField}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
