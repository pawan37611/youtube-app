import React from 'react';

const VideoListItem=({video,onVideoSelect})=>
{
   return <li onClick={ ()=>  onVideoSelect(video) } className="list-group-item">
                   {video.snippet.description}
         </li>
}

export default VideoListItem