import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h1>Victor</h1>
            <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Music">Music</Link></li>        
        <li><Link to="/About">About</Link></li>
          </ul>
        </div>
    );
};

export default Nav;