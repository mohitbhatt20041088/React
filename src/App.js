import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''

    };
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState({ monsters: users }, () => {
        console.log(this.state);
      }));
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monster' onChange={(event) => {
          const searchField=event.target.value.toLowerCase();
          this.setState({ searchField });
        }}/>
        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1 style={{ color: 'black', fontSize: '24px', fontFamily: 'fantasy' }}>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
