import axios from 'axios';

const KEY= 'AIzaSyC8_Ye5rq2p7TJ1ecnWDl_pJUhQDCZSt50';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});