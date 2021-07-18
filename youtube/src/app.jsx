import React, { useEffect, useState } from 'react'
import './app.css'
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // fetch를 쓸 때 옵션을 전달
    const requestOptions = {
      method: 'GET',
      redirect: 'follow' 
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDV3WMcPPbSaNuZcLzOOoI1ZadreB79atY", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items)) 
      .catch(error => console.log('error', error));
  }, []);

  return (
    <VideoList videos={videos} />
  )
}

export default App
