import React from 'react'
import VideoItem from './VideoItem';

export const VideoList = ({videos,videoSelect}) => {
 
  const renderedList = videos.map(video=>{
    return <VideoItem video={video} key={video.id.videoId} videoSelect={videoSelect} />
  })
 
  return (
    <div className='ui relaxed divided list'>
     {renderedList}
    </div>
  )
}
