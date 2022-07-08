import React from "react";
import { ReactDOM } from "react-dom";
import './SearchBar.css'

class Searchbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (

            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                <li>critère 1</li>
                <li>critère 2</li>
                <li>critère 3</li>
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input 
                placeholder="Search Businesses" 
              />

              <input 
                placeholder="Where?" 
                onChange = {this.handleLocationChange} 
              />

            </div>
            <div className="SearchBar-submit">
              <a>Let's Go</a>
            </div>
          </div> 
        )
    }
}

export default Searchbar;