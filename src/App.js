//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       monsters: [],
       searchField: ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {

    const {monsters,searchField} = this.state;
    //the above line of code is equal to
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
          placeholder='Search monsters' 
          handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
    )
  }
}

export default App;


// function App() {
//   return (

//   );
// }

//export default App;
