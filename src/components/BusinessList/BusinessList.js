import React from "react";
import './BusinessList.css'
import Business from '../Business/Business'

class BusinessList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
            <Business/>
            <Business/>
            <Business/>
            <Business/>
            <Business/>
            <Business/>
            </div>
        )
    }
}

export default BusinessList;