import React from 'react'

const VideoDetail =({video})  => {

    if(!video)
    return 'Loading...';

const videoid=video.id.videoId;
const url='https://www.youtube.com/embed/${videoid}';

    return (
        <div className="video-detail col-md-8" >
 
<div className="embed-responsive embed-responsive-16by9" >
    
<iframe className="embed-responsive-item" src={url} >

</iframe>
</div>

        <div className="details">
            <span>{video.snippet.title}</span>
            <span>{video.snippet.description}</span>
        </div>
        </div>
    )

}

export default VideoDetail;