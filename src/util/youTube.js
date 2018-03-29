import Axios from 'axios';

const youTubeSearch = (nextPageToken=null) => {
  Axios
    .get(`/api/youTube/search/${nextPageToken}`)
    .then(res => {
      const videos = this.state.videos.concat(res.data.items);
      this.setState({
        videos,
        nextPage: res.data.nextPageToken,
        totalResults: res.data.pageInfo.totalResults
      });
    })
    .catch(err => console.log(err));
};

export { youTubeSearch };
