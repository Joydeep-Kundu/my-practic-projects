import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    this.setState({ monsters: data });
  }
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
