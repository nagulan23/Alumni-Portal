import React, { Component } from 'react';

class SignPage extends Component {
    state = {  }

    render() { 
        return ( 
            <div style={{backgroundColor:"#FAF8F0",height:"100%",width:"100%",position:"absolute",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{color:"#E44652",fontSize:"30px",fontWeight:"bold",padding:"10px"}}>
                    Welocm to Alumni Connect
                </div>
                <form >
                    <div style={{display:"flex",padding:"20px",height:"42px"}}>
                        <input maxlength="2"  style={{fontSize:"20px",width:"40px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                        <div style={{padding:"10px",fontWeight:"900"}}>.</div>
                        <input maxlength="2" style={{fontSize:"20px",width:"40px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                        <div style={{padding:"10px",fontWeight:"900"}}>.</div>
                        <input maxlength="2" style={{fontSize:"20px",width:"40px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                        <div style={{padding:"10px",fontWeight:"900"}}>.</div>
                        <input maxlength="8" style={{fontSize:"20px",width:"110px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                    </div>
                    <div style={{display:"flex",padding:"20px",height:"42px"}}>
                        <input maxlength="8" style={{fontSize:"20px",width:"350px",textAlign:"center",border:"3px solid #043353",borderRadius:"8px",fontWeight:"700",color:"#E44652"}}/>
                    </div>

                </form>
            </div>
        );
    }
}
 
export default SignPage;