import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Music from './components/Music';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    songs = ['song', 'song2', 'song3', 'song4'];
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/Music" component={Music} />
                    <Route path="/About" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
