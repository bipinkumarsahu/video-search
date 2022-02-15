import React from 'react'
import './VideoItem.css'
const VideoItem = ({video,videoSelect}) => {
  return (
    <div className='video-item item' onClick={()=>videoSelect(video)}>
      <div className='ui image'>
        <img src = {video.snippet.thumbnails.default.url} />
      </div>
      <div className='middle aligned content'>
        <div className='header'>
           {video.snippet.title}
        </div> <br/>
        <div className='metadata'>
          {video.snippet.channelTitle}
        </div>
       
      </div>
      
    </div>
  )
}
export default VideoItem;