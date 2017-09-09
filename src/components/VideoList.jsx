var VideoList = ({videos, handleVideoClick}) => {
  if(videos) {
    return (
      <div className="video-list">
      {
          videos.map(function(video){
            return <VideoListEntry video={video} handleVideoClick={handleVideoClick}/>;
          })
      }
      </div>
    );
  } else {
    return (<div className="video-list"></div>);
  }

};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
