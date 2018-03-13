import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  handleClick = () => console.log('clicked')
  render() {
    return (<div className='Header'>
      <nav>
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo">Calendar</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to='/calendar'>Calendar</Link>
            </li>
            <li>
              <Link className="waves-effect waves-light btn" to='/auth'>Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>);
  }
}

export default Header
