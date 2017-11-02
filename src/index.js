import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search_Bar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash';

const API_KEY = 'AIzaSyCnpDObOLiiqN87YKJKZ-cxzdAsvYD1F-U';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            videos: [],
            selectedvideo:null
        };
      this.videoSearch('dog');

    }

videoSearch(term)
{
    YTSearch({
        key: API_KEY,
        term: term
    }, videos => {
        
        this.setState({
            videos:videos,
            selectedVideo:videos[0]
        })
       
    });
}

    render() {
 const videosearch=_.debounce(term=>{this.videoSearch(term)},300);

        return (
            <div>
                <Search_Bar videoSearch={videosearch}/>
                <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos}/>
                 <VideoDetail video={this.state.selectedVideo}/>

                
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root'));
