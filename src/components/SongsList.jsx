import React from 'react';
import { songs } from '../songsData';
import { Link } from 'react-router-dom';

export default class SongsList extends React.Component {

    getSongsList(songsData) {
        if(songsData){
            return songsData.map((song, index) => {
                let linkName = song.title.replace(/\s+/g, "");
                return(
                    <li key={index} className="">
                        <Link to={`/songs/${linkName}`}>{song.title}</Link>
                    </li>
                );
            });
        }
        return null;
    }

    render(){
        return(
            <div>
                <ul>
                    {this.getSongsList(songs)}
                </ul>
            </div>
        );
    }
}
