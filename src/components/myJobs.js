import React, { Component } from 'react';
import Jobcard from "./job/jobcard"
import AddBoxIcon from '@material-ui/icons/AddBox';
import axios from 'axios';

class MyJobs extends React.Component {

    state= {
        data:null,
    }

    constructor(props) {
        super(props);
        console.log("my jobs............");
        this.getData();
      }
    getData() {
        console.log("getting jobs............");
    
        var datalist=[];
        fetch('http://localhost:8081/final/myjobs', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                "Token":"t101",
            })
            }).then(response => {
            console.log(response);
            if (response.ok) {
                response.json().then(jlist=> {
                console.log(jlist);
                console.log(jlist.data);
                this.setState({data:jlist.data});
                console.log(datalist);
                });
            }
            });
      }
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
                        {
                            (this.state.data==null)?
                            <div className="loader" style={{alignSelf:"center"}}></div>:
                            this.state.data.map((di)=>{
                                return <div>
                                    <Jobcard data={di}/>
                                    <div style={{ height: "20px", width: "100%" }}></div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div style={{width:"calc( 20% - 20px)",margin:"10px"}}>
                    <div onClick={()=>this.props.changeTab(this)} className="profile-add-button" style={{boxShadow:"0 0 10px gray",cursor:"pointer",alignItems:"center",backgroundColor:"#065285",padding:"10px",borderRadius:"10px",display:"flex",position:"fixed",width:"calc( 20% - 20px)",color:"white"}}>
                        <AddBoxIcon style={{fontSize:"30px"}}/>
                        <div style={{paddingLeft:"10px",}}>
                            Post a Job
                        </div>
                    </div>
                </div>
        </div>;
    }
}
 
export default MyJobs;