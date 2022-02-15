import React from 'react'

export const VideoDetail = ({video}) => {
  

 

  if(video != null){
    const videoSrc = 'https://www.youtube.com/embed/' + video.id.videoId;
    return (
      <div className='ui segment'>
        <div className='ui embed'>
        <iframe width="560" height="315"
         src={videoSrc}
          title="YouTube video player" 
          frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowFullScreen>

        </iframe>
        </div>
        <div className='ui header'>
        {video.snippet.title}
        </div>
        <div className='meta'>{video.snippet.description}</div>
      </div>
    )
  }
  else
  return <div></div>;
  
 
}
