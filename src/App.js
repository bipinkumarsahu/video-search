import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  render() {
    return (
      <div className='ui container'> 
      <h1>Video Search</h1>
        <SearchBar />
      </div>
    )
  }
}
