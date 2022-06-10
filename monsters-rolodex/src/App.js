import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Footer } from './footer/footer.components';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    }
  }

// Get user data through API
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }))
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    
    return(
          // CamelCase Characters
          <div className="App">
            <h1>Monsters Rolodex</h1>
            

            <SearchBox
              placeholder="Search Monsters"
              handleChange = {event => 
               this.setState({ searchField: event.target.value })}
            />
            <CardList monsters = {filteredMonsters} />
            <Footer />
          </div>
        );
  }
}

export default App;
