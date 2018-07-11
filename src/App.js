import React, { Component } from 'react';
import './App.css';
import 'tachyons';
//import {robots} from './robots';
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll from './Components/Scroll/Scroll';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      search:'',
      robots:[]
    }
  }

searchChange = (event) => {
  console.log('value', event.target.value);
   this.setState({search:event.target.value});
}

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users =>  {this.setState({robots:users}); })
.catch(err => console.log('Error Getting users'))
}

  render() {
      const robotsArray = this.state.robots.filter((robot)=> {
          return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
       })
      console.log('Array',robotsArray);
    return (
      <div className ="tc">
        <h2 className =" f1 grow bg-dark-red"> ROBOFRIENDS </h2>
        <SearchBox searchInput ={this.searchChange}/>
        <Scroll>
          <CardList robots={robotsArray}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
