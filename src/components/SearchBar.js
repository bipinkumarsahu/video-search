import React, { Component } from "react";

export default class SearchBar extends Component {
  
  state={term:''}

  onFormSubmit = event =>{
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui fluid action input">
            <input type="text" placeholder="Search videos here"
            value={this.state.term}
            onChange={e=>this.setState({term:e.target.value})} />
            <button className="ui right labeled icon button" type="submit" >
              <i className="search icon"></i>
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
