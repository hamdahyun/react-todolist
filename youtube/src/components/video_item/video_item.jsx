import React from 'react';

const VideoItem = (props) => (
    <h1>{props.videos.snippet.title}</h1>
);

export default VideoItem;