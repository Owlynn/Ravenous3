import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from '../SearchBar/SearchBar'
import './App.css';
import BusinessList from '../BusinessList/BusinessList'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1> Ravenous </h1>
        <Searchbar />
        <BusinessList/>
      </div>
    );
  }
}

export default App;
