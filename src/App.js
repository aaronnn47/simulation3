import React,{Component} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Posts from './Components/Posts/Posts'

class App extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/posts' component={Posts}/>
         </Switch>
      </HashRouter>
    )
  }
}

export default App
