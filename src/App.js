import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import { VideoList } from './components/VideoList';
import { VideoDetail } from './components/VideoDetail';

export default class App extends Component {
 
  state={videos:[],selectedVideo:null}
  onTermSubmit = async(term) =>{
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    });
   this.setState({videos : response.data.items, selectedVideo:response.data.items[0]});
  }
 

  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video})
    console.log(video)
  };
  render() {
    return (
      <div className='ui container'> 
      <h1>Video Search</h1>
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ten wide column'>
            <VideoDetail video={this.state.selectedVideo} />       
          </div>
          <div className='six wide column'>
             <VideoList videos={this.state.videos} videoSelect={this.onVideoSelect}/>
          </div> 
       
        
      
        </div>
      </div>
    )
  }
}
