import React from 'react';
import Business from '../Business/Business.js'
import './BusinessList.css'

class BusinessList extends React.Component{
   

    render(){
    return <div className="business_list">{this.props.businesses.slice(0,6).map(business => {
        return <div className="business"><Business business={business} id={business.id}/></div>
   
    })}</div>
    }
}

export default BusinessList;