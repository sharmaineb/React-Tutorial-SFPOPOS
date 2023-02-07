import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className='Title'>
      <header>
        <h1>SFPOPOS</h1>
        <div className='Title-Subtitle'>San Francisco Privately Owned Public Open Spaces</div>

        <div>
        <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/">List</NavLink>
        <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/about">About</NavLink>
        <RandomSpace />
        </div>

      </header>
    </div>
  )
}

export default Title

// JSX is an extention of the HTML language. It uses the XML language syntax
// and in a React Project can be written alongside your regular Javascript.