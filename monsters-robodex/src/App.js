import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    this.setState({ monsters: data });
  }
  //in func 'this' undifind and '.binding ' is used to refer to the the app

  //in arrow func 'this' refer too app component
  handleChange = (e) => (
    this.setState({ searchField: e.target.value })
  )
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster RoboDex</h1>
        <SearchBox placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />


      </div>
    )
  }
}

export default App;
