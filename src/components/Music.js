import React, { Component } from 'react';
import '../App.css';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSong: 0
        };
    }
    songs = ['song', 'song2', 'song3', 'song4'];
    handleSong = event => {
        this.setState({ selectedSong: event.target.value });
    };
    render() {
        const songItems = this.songs.map((song, index) => (
            <button onClick={this.handleSong} value={index} key={song}>
                {song}
            </button>
        ));
        console.log(this.state);
        return (
            <div className="App">
                <audio
                    controls
                    src={'./' + this.songs[this.state.selectedSong] + '.mp3'}
                />
                <div>{songItems}</div>
              
            </div>
        );
    }
}

export default Music;
