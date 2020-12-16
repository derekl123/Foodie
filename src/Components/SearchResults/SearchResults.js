import React from 'react';
import './SearchResults.css'
import BusinessList from '../BusinessList/BusinessList.js'

class SearchResults extends React.Component{
 
    render(){
        return <div className="displayed_results">
          <BusinessList businesses={this.props.searchedbusinesses}/>
        </div>
    
    }
}

export default SearchResults;