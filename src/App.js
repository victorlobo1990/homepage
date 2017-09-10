import React, { Component } from 'react';
import './App.css';
import Music from './components/Music';
import Home from './components/Home';

class App extends Component {
    songs = ['song', 'song2', 'song3', 'song4'];
    render() {
        return (
            <div className="App">
                <h1>Victor</h1>
                <Music/>
                <Home/>
            </div>
        );
    }
}

export default App;
