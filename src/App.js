import React, { Component, useState } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import { VideoList } from "./components/VideoList";
import { VideoDetail } from "./components/VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  

  return (
    <div className="ui container">
      <h1>Video Search</h1>
      <SearchBar onSearchSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ten wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="six wide column">
          <VideoList
            videos={videos}
            videoSelect={(video) => {
              setSelectedVideo(video);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
