import React from "react";
import { ReactDOM } from "react-dom";
import './SearchBar.css'

class Searchbar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            location : "",
            term : "",
            sortBy :"best_match"
        }

        this.sortByOptions ={
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }

   
    getsortByClass(selectedOption){
        if (this.sortBy === selectedOption){
            return 'active';
        }  
        
        return '';
    };


    render(){
        return (

            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                <li>Best Match</li>
                <li>Most Reviewed</li>
                <li>critère 3</li>
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input 
                placeholder="Search Businesses" 
              />

              <input 
                placeholder="Where?" 
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