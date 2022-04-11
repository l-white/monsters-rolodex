import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list-component.jsx'
import SearchBox from './components/search-box/search-box.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      // once we fetch, we'll get a promise and call .then() on that value
      // pass a callback where the argument is the response itself
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
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
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
          {
            /*filteredMonsters.map((monster) => {
              return <div key={monster.id}><h2>{monster.name}</h2></div>
            })*/
          }
          <SearchBox 
            className="monsters-search-box"
            placeholder='Search Monsters' 
            onChangeHandler={onSearchChange} 
          />
          <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
