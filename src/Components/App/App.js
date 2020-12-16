import React from 'react';
import './App.css';
import Banner from '../Banner/Banner.js'
import Searchbar from '../Searchbar/Searchbar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Yelp from '../utils/FoodUtility.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

    searchYelp(term, location){
      Yelp.search(term, location).then(searchResults => {
        this.setState({searchResults: searchResults});

      }).catch(error => {
        console.error('dafuq');
        console.error(error);
      })
    }
    
  
  render(){
    return <div className="App">
      <Banner />
      <Searchbar onSearch={this.searchYelp} />
      <SearchResults searchedbusinesses={this.state.searchResults} />
    </div>
  }
}

export default App;
