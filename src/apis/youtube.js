import axios from 'axios';

const KEY = 'AIzaSyC3o3iNFiOSIlXWlfUMcvPX5oZgq8rOVDE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
