import React, { Component } from 'react';
import footer_logo from "../assets/transparent-logo.png"; 
import { Route, Redirect, Switch } from "react-router-dom";
import Signin from './signin';
import Home from './home';
import './header.css';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DonatePage from './donate';
import ProfilePage from './profile';
import Jobpager from './job/jobpager';
import Pagebuilder from './job/pagebuilder';
import BlogPage from './Blog/blog';
import InBlogPage from './Blog/inblog';
import { withRouter } from "react-router-dom";

class Header extends Component {
    state = { 
        page:1,
    }

    pageChange(pgno){
        if(pgno===4){
            this.setState({page:pgno});
            this.props.history.push("/donate");
        }
        if(pgno===1){
            this.setState({page:pgno});
            this.props.history.push("/home");
        }
         if(pgno===2){
            this.setState({page:pgno});
            this.props.history.push("/job");
        }
        if(pgno===3){
           this.setState({page:pgno});
           this.props.history.push("/blog");
       }
        if(pgno===0){
            this.setState({page:1});
            this.props.history.push("/profile");
        }
    }

    render() { 
        return ( 
            <div style={{backgroundColor:"#FAF8F0",width:"100%",position:"absolute",display:"flex",flexDirection:"column",overflow:"auto"}}>
                <div className="header-style" style={{fontWeight:"500",width:"calc( 100% - 40px )",color:"#FAF8F0",padding:"10px",paddingLeft:"20px",paddingRight:"20px",boxShadow:"0 0 10px black",zIndex:1,display:"flex",alignItems:"Center",justifyContent:"space-between"}}>
                    <div  style={{display:"flex",alignItems:"center"}}>
                        <div style={{fontFamily:"'Dancing Script', cursive",fontSize:"25px",color:"#E44652 "}}>
                            Alumni
                        </div>
                        <div style={{fontFamily:"'Josefin Sans', sans-serif",fontSize:"20px",paddingLeft:"10px",paddingRight:"15px",marginBottom:"-5px"}}>
                            CONNECT
                        </div>
                        <div className={this.state.page===1? "header-pressed-button-style":"header-button-style "} style={{cursor:"pointer", borderRadius: "10px",padding:"8px",marginLeft:"20px",paddingLeft:"15px",paddingRight:"15px"}}
                            onClick={this.pageChange.bind(this,1)}
                        >
                            Home
                        </div>
                        <div className={this.state.page===2? "header-pressed-button-style":"header-button-style "} style={{cursor:"pointer", borderRadius: "10px",padding:"8px",marginLeft:"20px",paddingLeft:"15px",paddingRight:"15px"}}
                            onClick={this.pageChange.bind(this,2)}
                        >
                            Jobs
                        </div>
                        <div className={this.state.page===3? "header-pressed-button-style":"header-button-style "} style={{cursor:"pointer", borderRadius: "10px",padding:"8px",marginLeft:"20px",paddingLeft:"15px",paddingRight:"15px"}}
                            onClick={this.pageChange.bind(this,3)}
                        >
                            Blogs
                        </div>
                        <div className={this.state.page===4? "header-pressed-button-style":"header-button-style "} style={{cursor:"pointer", borderRadius: "10px",padding:"8px",marginLeft:"20px",paddingLeft:"15px",paddingRight:"15px"}}
                            onClick={this.pageChange.bind(this,4)}
                        >
                            Donate
                        </div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",paddingRight:"30px"}}>
                        <IconButton >
                            <SearchIcon style={{color:"white"}}/>
                        </IconButton>
                        <div style={{width:"1px",backgroundColor:"rgba(255,255,255,0.3)",height:"50px"}}/>
                        <div style={{display:'flex',alignItems:"center",cursor:"pointer"}} onClick={this.pageChange.bind(this,0)}>
                            <div style={{border:"2px solid #E44652 ", borderRadius:"50px",padding:"3px",marginLeft:"10px"}}>
                                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            </div>
                            <div style={{paddingLeft:"10px",fontWeight:"500",color:"#FAF8F0",maxWidth:"150px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>
                                Nagulan S
                            </div>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/signin">
                        <Signin />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/donate">
                        <DonatePage />
                    </Route>
                    <Route exact path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route exact path="/jobinfo">
                        <Jobpager/>
                    </Route>
                    <Route exact path="/job">
                        <Pagebuilder/>
                    </Route>
                    <Route exact path="/inblog">
                        <InBlogPage/>
                    </Route>
                    <Route exact path="/blog">
                        <BlogPage/>
                    </Route>
                </Switch>
                <div style={{backgroundColor:"#282726",width:"calc( 100% - 70px )",padding:"20px",paddingLeft:"20px",paddingRight:"50px",boxShadow:"0 0 10px black",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{color:"#FAF8F0"}}>
                        Ⓒ ICRS,Amrita Vishwa Vidyapeetham, Coimbatore
                    </div>
                    <img src={footer_logo} alt="" width="250px" />
                </div>
            </div>
        );
    }
}
 
export default withRouter(Header);