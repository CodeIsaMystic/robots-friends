import React, { useState , useEffect } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import  './App.css';


function App () {
  /**  some states  **/
  const [  robots , setRobots ] = useState([]);
  const [ searchfield , setSearchfield ] = useState('');


  /**  useEffect (side effect)
  * every rendering the useEffect is applied   
  *  with the sd args empty array
  *  it only run the useEffect initially
  *  otherwise it turn like an infinate loop
  **/
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots(users)});

      //console.log([robots, searchfield]);
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  //console.log([robots, searchfield]);
  
  return !robots.length ?  
    (
        <div className='tc'>
          <h1>Loading...</h1>
        </div> 
    )
  :
    ( 
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div> 
    );
}

export default App;