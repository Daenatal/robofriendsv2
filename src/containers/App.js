import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component  { //this is the parent component so we can define state and pass it to other components

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
        // .then(response=> { long version
        //     return response.json();
        // })
        // .then(users => {
        //     this.setState({robots: users})
        // });
        // this.setState({robots: robots});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        console.log(event.target.value);
        
        //console.log(filteredRobots);
    }

    render() {
        //use destructuring to clean up code
        const { robots, searchfield} = this.state; //allows us to remove this.state below
        const filteredRobots = robots.filter(robot =>{ // was this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); // was this.state.searchfield.toLowerCase()
        })
        //if (!robots.length) { //was robots.length === 0
            return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <h1 className='f1'>Meow friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}
    

export default App;