import React, { Component } from 'react';
import Eventcard from "./event/eventcard"
import AddBoxIcon from '@material-ui/icons/AddBox';

class MyEvents extends React.Component {
    render() { 
        return <div style={{display:"flex",width:"100%"}}>
                <div style={{width:"calc( 80% - 20px)"}}>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px",
                        }}
                    >
                        <Eventcard />
                        <div style={{ height: "20px", width: "100%" }}></div>
                        <Eventcard />
                        <div style={{ height: "20px", width: "100%" }}></div>
                        <Eventcard />
                        <div style={{ height: "20px", width: "100%" }}></div>
                        <Eventcard />
                        <div style={{ height: "20px", width: "100%" }}></div>
                        <Eventcard />
                        <div style={{ height: "50px", width: "100%" }}></div>
                    </div>
                </div>
                <div style={{width:"calc( 20% - 20px)",margin:"10px"}}>
                    <div onClick={()=>this.props.changeTab(this)} className="profile-add-button" style={{boxShadow:"0 0 10px gray",cursor:"pointer",alignItems:"center",backgroundColor:"#065285",padding:"10px",borderRadius:"10px",display:"flex",position:"fixed",width:"calc( 20% - 20px)",color:"white"}}>
                        <AddBoxIcon style={{fontSize:"30px"}}/>
                        <div style={{paddingLeft:"10px",}}>
                            Post an Event
                        </div>
                    </div>
                </div>
        </div>;
    }
}
 
export default MyEvents;