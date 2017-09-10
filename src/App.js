import React, { Component } from 'react';
import './App.css';
import song from './song.mp3';

class App extends Component {
    render() {
        console.log(song);
        return (
            <div className="App">
                <h1>Victor</h1>
                <audio src="./song.mp3" >audio player</audio>
            </div>
        );
    }
}

export default App;
