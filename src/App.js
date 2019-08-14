import React, { Component } from 'react';
import './App.css';
import {SearchBox} from './Components/search-box/search-box.component';
import { CardList } from './Components/card-list/card-list.component';
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeald: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ monsters: data })) ;
  } ;

  render() {

    const { monsters ,searchFeald } = this.state ;
    const filtredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeald.toLowerCase())) ;

    return (
      <div className="App">
        <h1> Cat Monsters</h1>
      <SearchBox
       placeholder='search box' 
       handleChange={e =>
         this.setState({ searchFeald: e.target.value})
      }/>
        <CardList monsters={filtredMonsters} />
      </div>
    );
  }
}

export default App;
