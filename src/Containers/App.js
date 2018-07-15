import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import {searchFieldInputAction, loadRobotsAction} from '../actions';
import {connect} from 'react-redux';
//import {robots} from './robots';
import CardList from '../Components/CardList/CardList';
import SearchBox from '../Components/SearchBox/SearchBox';
import Scroll from '../Components/Scroll/Scroll';

const 	mapStateToProps = state => {
	return {
		search:state.searchFieldReducer.search,
		robots : state.getRobotsReducer.robots,
		isPending: state.getRobotsReducer.isPending,
		error: state.getRobotsReducer.error
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		onSearchChange: (event) => dispatch(searchFieldInputAction(event.target.value)),
		loadRobots: () => dispatch(loadRobotsAction())
	}
}

class App extends Component {

/* Not needed after REDUX
  constructor(props){
    super(props);
    this.state = {
      robots:[]
    }
  }
  */

/*
No need after redux
onSearchChange = (event) => {
  console.log('value', event.target.value);
   this.setState({search:event.target.value});
}
*/

componentDidMount(){

	this.props.loadRobots();

	/* Not needed after REDUX
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users =>  {this.setState({robots:users}); })
.catch(err => console.log('Error Getting users'))
*/
}

  render() {
      const robotsArray = this.props.robots.filter((robot)=> {
          return robot.name.toLowerCase().includes(this.props.search.toLowerCase());
       })
      console.log('Array',robotsArray);
    return (
    	this.props.isPending ?
    	<div className = 'tc'> <p> Loading.... </p> </div> 
    	:
      <div className ="tc">
        <h2 className =" f1 grow bg-dark-red"> ROBOFRIENDS </h2>
        <SearchBox searchInput ={this.props.onSearchChange}/>
        <Scroll>
          <CardList robots={robotsArray}/>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
