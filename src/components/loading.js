import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class LoadingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{backgroundColor:"#FAF8F0",height:"100%",width:"100%",position:"absolute",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <ReactLoading type="spin" color="#E44652" height="50px" width="50px" />
                <div style={{color:"#E44652",fontSize:"30px",fontWeight:"bold",padding:"10px"}}>
                    Loading ...
                </div>
            </div>
        );
    }
}
 
export default LoadingPage;