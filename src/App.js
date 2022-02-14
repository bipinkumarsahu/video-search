import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube'

export default class App extends Component {
 
  onTermSubmit = async(term) =>{
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    });
    console.log(response)
  }
 
  render() {
    return (
      <div className='ui container'> 
      <h1>Video Search</h1>
        <SearchBar onSearchSubmit={this.onTermSubmit} />
      </div>
    )
  }
}
