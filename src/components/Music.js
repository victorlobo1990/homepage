import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSong: 0,
            songs: [{song: 'test'}]
        };
    }

    componentWillMount() {
        axios.get('http://localhost:4000/music').then(response => {
            console.log(response.data);
            this.setState({ songs: response.data });
        });
    }

    handleSong = event => {
        this.setState({ selectedSong: event.target.value });
    };
    render() {
        console.log('state', this.state);

        const songItems = this.state.songs.map((song, index) => (
            <button onClick={this.handleSong} value={index} key={song._id}>
                {song.song}
            </button>
        ));

        return (
            <div className="App">
                <audio
                    controls
                    src={'./' + this.state.songs[this.state.selectedSong].song + '.mp3'}
                />
                <div>{songItems}</div>
            </div>
        );
    }
}

export default Music;
