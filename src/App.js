import './App.css';
import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import Signin from './components/signin';
import Header from './components/header';
import Loading from './components/loading';



class App extends Component {
  state = { 
    login:true,
    link:"/"
  }

  constructor(props){
    super(props);
    setTimeout(this.checkLogin.bind(this), 0)
  }

  checkLogin(){
    if(this.state.login)
      this.setState({ link:"/home"});
    else
      this.setState({ link:"/signin"});
  }

  render(){
    return ( 
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Loading />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/home">
            <Header />
          </Route>
          <Route exact path="/donate">
            <Header />
          </Route>
        </Switch>
      </React.Fragment>
     );
  }
}
 
export default App;

//<Redirect to={this.state.link} />