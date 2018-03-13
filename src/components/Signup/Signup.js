import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css'

class Signup extends Component {

    state = {
      authenticate:false,
      checkCode:false
    }


    renderForm = () => {
      const {authenticate,checkCode} = this.state;
      if(!authenticate){
        return(
        [
          <div className="row">
            <div className="input-field col s12">
              <input  id="name" type="text" className="validate" placeholder='name' required/>
            </div>
          </div>,
            <div className="row">
              <div className="input-field col s12">
                <input  id="email" type="email" className="validate" placeholder='thinkful email'/>
              </div>
            </div>,
            <div className='row'>
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" placeholder='password'/>
              </div>
            </div>
        ]
        )
      }
      if(!checkCode && authenticate){
        return(
          <div className='row'>
            <div className="input-field col s12">
              <input id="code" type="text" className="validate" placeholder='put the code'/>
            </div>
          </div>
        )
      }
      else{
        <div className='row'>
          <div className="input-field col s12">
            <input id="number" type="text" className="validate" placeholder='phone number(optional)'/>
          </div>
        </div>
      }
    }

    renderButton = () => {
      const {authenticate,checkCode} = this.state;
      if(!authenticate){
        return(
          <div className=" col s12">
            <a className="waves-effect waves-light btn" onClick={() => this.onClick('authenticate')}>Authenticate</a>
          </div>
        )
      }
      if(!checkCode && authenticate){
        return(
          <div className=" col s12">
            <a className="waves-effect waves-light btn" to='/calendar' onClick={this.checkCode}>Check code</a>
          </div>
        )
      }
      return (
        <div className=" col s12">
          <Link className="waves-effect waves-light btn" to='/auth'>Sign Up</Link>
        </div>
      )
    }

    onClick = text => this.setState({[text]:!this.state[text]})

    checkCode = () => {
      console.log('dd')
    }

    render() {
        return (
            <div className="Signup">
                <h4>Sign Up</h4>
                <div className="row">
                    <form className="col s12">
                      {this.renderForm()}
                      <div className="row">
                        {this.renderButton()}
                      </div>
                      <div className="row">
                        <div className=" col s12">
                          <Link className="waves-effect waves-light btn yellow darken-4" to='/auth'>Go Back</Link>
                        </div>
                      </div>
                    </form>
                  </div>
            </div>
        );
    }
}

export default Signup
