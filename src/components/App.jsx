
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: null,
      currentlyPlaying: null
    };
    this.searchYouTube({'maxResults': '5',
      'part': 'snippet',
      key: YOUTUBE_API_KEY,
      'q': 'cat',
      'type': 'video'}
);
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search clickHandler={(data, cb) => this.searchYouTube(data, cb)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentlyPlaying}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleVideoClick={(video) => {this.setState({currentlyPlaying: video}); }} />
          </div>
        </div>
      </div>
    );
  }
  searchYouTube(data, cb) {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: data,
      success: (data) => {
        this.setState({
          videos: data.items,
          currentlyPlaying: data.items[0]
        });
        cb();
      }
    });
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
