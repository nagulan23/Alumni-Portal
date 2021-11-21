import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  LinkedInLoginButton
} from 'react-social-login-buttons';
import axios from 'axios';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import LoginIcon from '@mui/icons-material/Login';

class SignPage extends Component {

    state = { 
        rollno:"",
        password:""
    }

    constructor(props){
        super(props);
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get('code');
        const state = queryParams.get('state');
        console.log(code); // 55 test null
        console.log(state);
        if(code!=null){
            const body = { 
                grant_type: 'authorization_code',
                code: code,
                client_id: '86clfmr173e6w2',
                client_secret: 'esFirEKzXoCAvE7q',
                redirect_uri: 'http://localhost:3000/signin'
            };
            const header = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            axios.post('https://www.linkedin.com/oauth/v2/accessToken', new URLSearchParams(body), header)
                .then(response => {
                    console.log(response);
                    console.log('Bearer '+response.data.access_token);
                    fetch('https://api.linkedin.com/v2/me', {
                        method: 'GET',
                        mode:"no-cors",
                        headers: {
                            "Authorization": 'Bearer '+response.data.access_token,
                            'Access-Control-Allow-Origin':'*'
                        },
                    })
                    .then(response =>console.log(response))
                    .catch(err=>console.log(err));
                })
                .catch(err=>console.log(err));
        }
        console.log('..');
    }

    requestProfile () {
        var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86clfmr173e6w2&scope=r_liteprofile&state=foobar&redirect_uri=http://localhost:3000/signin`

        window.location.href=oauthUrl;
        
        /*var width = 450,
          height = 730,
          left = window.screen.width / 2 - width / 2,
          top = window.screen.height / 2 - height / 2;
    
        window.open(
          oauthUrl,
          "Linkedin",
          "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
            width +
            ", height=" +
            height +
            ", top=" +
            top +
            ", left=" +
            left
        );*/
      };

    onChange1(e){
        this.setState({rollno:e.target.value});
    }

    onChange2(e){
        this.setState({password:e.target.value});
    }

    render() { 
        return ( 
            <div style={{height:"100%",width:"100%",position:"absolute",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{height:"calc( 100% - 80px)",width:"calc( 30% - 80px)",minWidth:"280px",display:"flex",flexDirection:"column",padding:"40px"}}>
                    <div style={{display:"flex",alignItems:"center",marginTop:"80px"}}>
                        <div style={{fontFamily:"'Dancing Script', cursive",fontSize:"35px",color:"#E44652"}}>
                            Alumni
                        </div>
                        <div style={{fontFamily:"'Josefin Sans', sans-serif",fontSize:"30px",fontWeight:"700",paddingLeft:"10px",paddingRight:"15px",marginBottom:"-5px",color:"#043353"}}>
                            CONNECT
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginTop:"100px"}}>
                        <div>
                            <LinkedInLoginButton onClick={this.requestProfile.bind(this)}/>
                        </div>
                        <div>
                        <div style={{fontFamily:"'Josefin Sans', sans-serif",fontSize:"25px",margin:"20px",marginLeft:"10px",color:"#E44652"}}>
                            or
                        </div>
                        <div style={{display:"flex",height:"42px"}}>
                            <input className="sigin-input" type="text" value={this.state.rollno} onChange={this.onChange1.bind(this)} placeholder="Amrita Roll Number" style={{paddingLeft:"10px",paddingRight:"10px",fontSize:"20px",width:"100%",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                        </div>
                        <div style={{display:"flex",height:"42px",paddingTop:"10px"}}>
                            <input className="sigin-input" type="password" value={this.state.password} onChange={this.onChange2.bind(this)} placeholder="Domain Password" style={{paddingLeft:"10px",paddingRight:"10px",fontSize:"20px",width:"100%",border:"3px solid #E44652",borderRadius:"8px",fontWeight:"700",color:"#043353"}}/>
                        </div>
                        <div className="profile-add-button" style={{marginTop:"20px",boxShadow:"0 0 10px gray",cursor:"pointer",alignItems:"center",backgroundColor:"#065285",padding:"10px",borderRadius:"5px",display:"inline-flex",color:"white"}}>
                            <div style={{fontWeight:"500",paddingRight:"10px"}}>
                                Lets Connect
                            </div>
                            <LoginIcon  style={{fontSize:"25px"}}/>
                        </div>
                        </div>
                    </div>
                </div>
                <div style={{height:"100%",width:"70%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",backgroundImage:`url("https://www.insidescience.org/sites/default/files/2021-05/Faces.jpg")`,backgroundSize:"cover",aspectRatio:"1/1"}}>
                    <div style={{backgroundColor:"rgba(4,51,83,0.9)",height:"calc( 100% - 40px)",width:"calc( 70% - 40px)",position:"absolute",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                        <div style={{fontFamily:"'Josefin Sans', sans-serif",fontSize:"70px",fontWeight:"700",color:"white"}}>
                            Get Connected With Your Alumni
                        </div>
                        <div style={{fontFamily:"'Josefin Sans', sans-serif",fontSize:"25px",color:"#E44652"}}>
                            Know your Alumni's Journey<br/><br/>Get Hot Referrals<br/><br/>Attend Events Hosted by Them
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(SignPage);


/*

<div style={{display:"flex",alignItems:"center",padding:"40px"}}>
                    <div style={{color:"#E44652",fontSize:"30px",fontWeight:"bold",padding:"10px",paddingRight:"40px"}}>
                        Welcome to
                    </div>
                    <div style={{fontFamily:"'Dancing Script', cursive",fontSize:"40px",color:"#E44652 "}}>
                        Alumni
                    </div>
                    <div style={{fontFamily:"'Josefin Sans', sans-serif",fontSize:"40px",paddingLeft:"10px",paddingRight:"15px",marginBottom:"-5px",color:"#043353"}}>
                        CONNECT
                    </div>
                </div>
                <form style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#E4DFCF ",padding:"40px",borderRadius:"20px",boxShadow:"0 0 10px gray"}}>
                    <div style={{color:"#E44652",fontSize:"18px",fontWeight:"500"}}>
                        Enter your Roll Number
                    </div>
                    <div style={{display:"flex",padding:"20px",paddingTop:"5px",height:"42px"}}>
                        <input maxlength="2"  style={{fontSize:"20px",width:"40px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                        <div style={{padding:"10px",fontWeight:"900"}}>.</div>
                        <input maxlength="2" style={{fontSize:"20px",width:"40px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                        <div style={{padding:"10px",fontWeight:"900"}}>.</div>
                        <input maxlength="2" style={{fontSize:"20px",width:"40px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                        <div style={{padding:"10px",fontWeight:"900"}}>.</div>
                        <input maxlength="8" style={{fontSize:"20px",width:"110px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                    </div>
                    <div style={{color:"#E44652",fontSize:"18px",fontWeight:"500"}}>
                        Domain Password
                    </div>
                    <div style={{display:"flex",padding:"20px",paddingTop:"5px",height:"42px"}}>
                        <input type="password" style={{fontSize:"20px",width:"340px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                    </div>
                    <button onClick={()=>this.props.history.push("/home")} style={{cursor:"pointer",backgroundColor:"#E44652",color:"white",border:"none",borderRadius:"10px",fontSize:"20px",padding:"10px"}}>Let's go in! {'>'}{'>'}</button>
                </form>
                <div style={{height:"80px"}}/>


*/