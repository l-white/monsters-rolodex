import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list-component.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      // once we fetch, we'll get a promise and call .then() on that value
      // pass a callback where the argument is the response itself
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => { 
        console.log(this.state)
      }
    ));
  }
  
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    console.log('render')
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="Search Monsters" 
          // will run every time the input changes
          onChange={onSearchChange}
        />
          {
            /*filteredMonsters.map((monster) => {
              return <div key={monster.id}><h2>{monster.name}</h2></div>
            })*/
          }
          <CardList />
      </div>
    );
  }
}

export default App;
