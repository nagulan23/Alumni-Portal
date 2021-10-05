import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

class SignPage extends Component {
    state = {  }

    constructor(props){
        super(props);
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get('code');
        const state = queryParams.get('state');
        console.log(code); // 55 test null
        if(code!=null){
            const requestOptions = {
                method: 'POST',
                body: {
                    grant_type: 'authorization_code',
                    code: code,
                    state: state,
                    client_id: '86clfmr173e6w2',
                    client_secret: 'esFirEKzXoCAvE7q',
                    redirect_uri: 'http://localhost:3000/signin'
                }
            };
            console.log(requestOptions);
            fetch('https://www.linkedin.com/oauth/v2/accessToken',requestOptions)
            .catch(err => console.log(err.message))
            .then(response => response.json())
            .then(data =>{
                /*fetch('https://api.linkedin.com/v2/me', {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer '+data },
                    }
                )
                .then(response => response.json())
                .then(profile =>{
                    console.log(profile);
                });*/
                console.log(data);
            });
        }
        console.log('..');
        /*fetch("https://api.linkedin.com/v2/me")
        .then((response) => response.json())
        .then((data) => console.log(data));*/
    }

    requestProfile (e) {
        var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86clfmr173e6w2&scope=r_liteprofile&state=foobar&redirect_uri=http://localhost:3000/signin`
        e.preventDefault();
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
                        <div style={{fontFamily:"'Josefin Sans', sans-serif",fontSize:"30px",fontWeight:"700",marginBottom:"20px"}}>
                            Log in to your account
                        </div>
                        <div className="profile-add-button" onClick={this.requestProfile.bind(this)} style={{cursor:"pointer",width:"80%",borderRadius:"5px",alignItems:"center",backgroundColor:"#0072B1",color:"white",padding:"10px",fontSize:"20px",fontWeight:"500",display:"flex"}}>
                            <LinkedInIcon style={{fontSize:"30px"}}/>
                            <div style={{height:"100%",width:"1px",backgroundColor:"white",marginLeft:"10px",marginRight:"10px"}}></div>
                            <div>LinkedIn</div>
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