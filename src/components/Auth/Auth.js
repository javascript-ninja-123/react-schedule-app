import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <div className='Auth'>
          <h4>Sign In</h4>
          <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input  id="email" type="email" className="validate" placeholder='thinkful email'/>
                  </div>
                </div>
                <div className='row'>
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" placeholder='password'/>
                  </div>
                </div>
                <div className="row">
                  <div className=" col s12 ">
                      <Link className="waves-effect waves-light btn" to='/calendar'>Sign In</Link>
                  </div>
                </div>
                <div className='row'>
                <div className=" col s12 ">
                      <Link className="waves-effect waves-light btn yellow darken-4" to='/auth/signup'>Sign Up</Link>
                </div>
                </div>
              </form>
            </div>
      </div>
    );
  }
}



export default Auth;
