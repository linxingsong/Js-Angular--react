// reducer
import { combineReducers } from 'redux';

const songsReducer = () =>{
  return [
    { title: 'Faded', duration: '3:40'},
    { title: 'All Star', duration: '4:30'},
    { title: 'No Scrubes', duration: '4:10'},
    { title: 'Macarena', duration: '5:30'}
  ];
};

const selectedSongReducer = (selectedSong=null, action)=>{
  if (action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});