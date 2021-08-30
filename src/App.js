import './App.css';
import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import Signin from './components/signin';
import Header from './components/header';
import Loading from './components/loading';
import ProfilePage from './components/profile';
import { withRouter } from "react-router-dom";
import Jobpager from "./job/jobpager"
import Pagebuilder from "./job/pagebuilder"


class App extends Component {
  state = {
    login:true,
  }

  constructor(props){
    super(props);
    setTimeout(this.checkLogin.bind(this), 0)
  }

  checkLogin(){
    console.log("..");
    if(this.state.login){
      if(this.props.location.pathname==="/")
        this.props.history.push("/home");
    }
    else
      this.props.history.push("/signin");
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
          <Route exact path="/profile">
            <Header />
          </Route>
          <Route exact path="/jobinfo">
            <Jobpager/>
          </Route>
          <Route exact path="/job">
            <Pagebuilder/>
          </Route>
        </Switch>
      </React.Fragment>
     );
  }
}
 
export default withRouter(App);

//<Redirect to={this.state.link} />