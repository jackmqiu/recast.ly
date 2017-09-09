var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyDown={() => {
      console.log(props.typeHandler);
      props.typeHandler({'maxResults': '5',
        'part': 'snippet',
        key: YOUTUBE_API_KEY,
        'q': $('.form-control').val(),
        'type': 'video'});
    }}/>
    <button className="btn hidden-sm-down" onClick={() => {
      props.clickHandler({'maxResults': '5',
        'part': 'snippet',
        key: YOUTUBE_API_KEY,
        'q': $('.form-control').val(),
        'type': 'video'});
    }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

//
// {'maxResults': '5',
//   'part': 'snippet',
//   key: YOUTUBE_API_KEY,
//   'q': $('.form-control').val(),
//   'type': 'video'}
