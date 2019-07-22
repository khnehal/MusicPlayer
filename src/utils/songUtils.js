import { songs } from '../songsData';

export const getCurrentSongData = selectedSongName => 
    songs.filter(songObj => songObj.title.replace(/\s+/g, "") === selectedSongName);

export const getNextSongData = currentSong => {
    let currentSongIndex = songs.findIndex(songObj => songObj.title.replace(/\s+/g, "") === currentSong);
    return songs[currentSongIndex+1];
}

export const getPrevSongData = currentSong => {
    let currentSongIndex = songs.findIndex(songObj => songObj.title.replace(/\s+/g, "") === currentSong);
    return songs[currentSongIndex-1];
}
    