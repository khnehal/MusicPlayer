import React from 'react';
import '../styles/App.css';
import { getCurrentSongData, getNextSongData, getPrevSongData } from '../utils/songUtils';

export default class player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playPause: "pause"
        }
        this.handleOnclick = this.handleOnclick.bind(this);
        this.displayPlayPause = this.displayPlayPause.bind(this);
        this.audio = new Audio();
    }

    componentDidMount(){
        let songLink = this.props.match.params.id;
        this.audio = new Audio(getCurrentSongData(songLink)[0].mp3);
        this.audio.play();
    }

    getCurrentSongDetails(songLink) {
        return getCurrentSongData(songLink)[0];
    }

    displayPlayPause() {
        if(this.state.playPause === "play"){
            console.log("inside pause-->", this.state.playPause);
            return <div className="btn glyphicon glyphicon-play"
                        onClick={() => this.handleOnclick("play")}></div>
        }
        console.log("inside pause-->", this.state.playPause);
        return <div className="btn glyphicon glyphicon-pause"
                        onClick={() => this.handleOnclick("pause")}></div>
    }

    handleOnclick(control, currentSong) {
        this.audio.pause();
        this.setState({playPause: "play"});
        let songData;
        if(control === "nextSong"){
            songData = getNextSongData(currentSong);
            if(songData){
                this.props.history.push(`/songs/${songData.title.replace(/\s+/g, "")}`);
                this.setState({playPause: "pause"});
                this.audio = new Audio(songData.mp3);
                this.audio.play();
            }
        }
        else if(control === "prevSong"){
            songData = getPrevSongData(currentSong);
            if(songData){
                this.props.history.push(`/songs/${songData.title.replace(/\s+/g, "")}`);
                this.setState({playPause: "pause"});
                this.audio = new Audio(songData.mp3);
                this.audio.play();
            }
        }
        else if(control === "pause"){
            this.setState({playPause: "play"});
            this.audio.pause();
        }
        else if(control === "play"){
            this.setState({playPause: "pause"});
            this.audio.play();
        }
    }

    render(){
        let songLink = this.props.match.params.id;
        let songDetails = this.getCurrentSongDetails(songLink);
        return(
            <div>
                <div className="displayContainer">
                    <img className="imageStyle"
                         src={songDetails.img}
                         alt={songDetails.title} />
                    <div className="backButton glyphicon glyphicon-menu-left"
                         onClick={() => {
                                this.audio.pause();
                                this.props.history.push("/songs")
                            }
                         }></div>
                </div>
                <div className="labelStyle">{songDetails.title}</div>
                <div className="audioControls">
                    <div className="btn glyphicon glyphicon-step-backward"
                         onClick={() => this.handleOnclick("prevSong", songLink)}></div>
                    {this.displayPlayPause()}
                    <div className="btn glyphicon glyphicon-step-forward"
                         onClick={() => this.handleOnclick("nextSong", songLink)}></div>
                </div>
            </div>
        );
    }
}
