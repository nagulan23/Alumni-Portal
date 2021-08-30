import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class SignPage extends Component {
    state = {  }

    render() { 
        return ( 
            <div style={{backgroundColor:"#FAF8F0",height:"100%",width:"100%",position:"absolute",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
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
            </div>
        );
    }
}
 
export default withRouter(SignPage);