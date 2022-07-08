import React from "react";
import './Business.css'

class Business extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="Business">
            <div className="image-container">
            <img src='././logo.svg' alt=''/>
            </div>
            <h2>Name</h2>
            <div className="Business-information">
            <div className="Business-address">
                <p>adresse</p>
                <p>Ville</p>
                <p>Code postak</p>
            </div>
            <div className="Business-reviews">
                <h3>Catégorie</h3>
                <h3 className="rating">stars</h3>
                <p>nb de reviews</p>
            </div>
            </div>
        </div>
        )
    }
}

export default Business;