import React from 'react';
import './Business.css'

class Business extends React.Component{
   
    render(){
        return <div className="Business_card">
                    <img className="business_image" src={this.props.business.image} alt="restaurant"/>
        <p className="business_name">{this.props.business.name}</p>
        <span className="business_location">{this.props.business.location}</span>
    </div>
    }
}

export default Business;