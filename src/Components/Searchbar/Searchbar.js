import React from 'react';
import { render } from 'react-dom';
import './Searchbar.css';
import search from './Search.png';

class Searchbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSecondTerm = this.handleSecondTerm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({term : e.target.value});
    }

    handleSecondTerm(e){
        this.setState({location: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSearch(this.state.term, this.state.location);
    }

    render(){
        return <div className="searchbar">
        <form onSubmit={this.handleSubmit} className="search_form">
           <label><input onChange={this.handleChange} type="text" placeholder="Find restaurants.."></input></label>
           <label> <input onChange={this.handleSecondTerm} type="text" placeholder="Where?"></input>
            </label>
            <label>
        <button type="submit" className="search_button">
            <img className="search_icon" src={search} />
        </button>
        </label> 
        </form>
    </div>
    }
}

export default Searchbar;