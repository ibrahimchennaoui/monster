import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }))
  }

  render() {
    return (
      <div className="App">

        {this.state.monsters.map(el =>
          (<ul key={el.id} >
            <h2>  {el.email} :  {el.name}</h2>
          </ul>
        ))}

      </div>
    );
  }
}

export default App;
