import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {updateUsername, updatePassword} from '../../ducks/reducer'
import {connect} from 'react-redux'
import axios from 'axios'
import './Login.css'
import main from './main_pic.png'

class Login extends Component {

  onLogin(){
    axios.post('/api/login', {username: this.props.username, password: this.props.password})
    .then(response=>console.log(response.data))
  }

  onRegister(){
    axios.post('/api/register', {username: this.props.username, password: this.props.username})
    // .then(()=>this.props.history.push('/home'))
    // console.log(this.props)
  }

  render() {
    return (
      <div className="home">
        <div className="main-container">
          <img src={main} alt=""/>
          <h1>Helo</h1>

          <div className="username">
          <p>Username:</p>
          <input onChange={(e)=> this.props.updateUsername(e.target.value)}/>
          </div>

          <div className="password">
          <p>Password:</p>
          <input onChange={(e)=> this.props.updatePassword(e.target.value)}/>
          </div>
          
          <div className="buttons">
          <button onClick={()=>this.onLogin()}>Login</button>
          <button onClick={()=>this.onRegister()}>Register</button>
          </div>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    username: state.username,
    password: state.password, 
  }
}

export default connect(mapStateToProps,{updatePassword,updateUsername})(Login)
