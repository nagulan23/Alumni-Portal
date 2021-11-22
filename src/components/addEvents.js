import React, { Component } from 'react';
import Jobcard from "./job/jobcard"
import PublishIcon from '@material-ui/icons/Publish';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


class AddEvent extends React.Component {

    state={
        event_title:"",
        poster:"",
        sdate:null,
        edate:null,
        stime:null,
        etime:null,
        loc:"",
        bio:"",
        des:"",
        reg_link:""
    }

    handleChange(inputi,event) {
        if(inputi===1){
            this.setState({ event_title: event.target.value });
        }
        else if(inputi===2){
            this.setState({ poster: event.target.value });
        }
        else if(inputi===3){
            this.setState({ sdate: event.target.value });
        }
        else if(inputi===4){
            this.setState({ stime: event.target.value });
        }
        else if(inputi===5){
            this.setState({ edate: event.target.value });
        }
        else if(inputi===6){
            this.setState({ etime: event.target.value });
        }
        else if(inputi===7){
            this.setState({ loc: event.target.value });
        }
        else if(inputi===8){
            this.setState({ bio: event.target.value });
        }
        else if(inputi===9){
            this.setState({ des: event.target.value });
        }
        else{
            this.setState({ reg_link: event.target.value });
        }
    }
    urlValidator(url){
        var result=true;
        try {
            var temp = new URL(url);
          } catch (_) {
            result=false; 
          }
        if(result)
          return(<CheckCircleIcon style={{color:"green"}}/>);
        else
          return(<CancelIcon style={{color:"red"}} visible="true"/>);
    }

    postData(){
        console.log(this.state);
        fetch('https://77a8-223-187-127-66.ngrok.io/final/addevent', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                "role":this.state.role,
                "name":this.state.company_name,
                "salaryl":this.state.salaryl,
                "salaryh":this.state.salaryh,
                "location":this.state.location,
                "jobdescription":this.state.job_description,
                "Token":"t101",
                "jobid":'' +(Math.random()*1000),
                "link":this.state.reg_link,
                "logo":this.state.logo,
                "requirements":this.state.requirements,
                "uimage":"https://lh3.googleusercontent.com/a-/AAuE7mAyoPmpjrx1JgcyRrDbKQeJFyVeMIYCy7Hyi2VW=k-s200",
                "uname":"Nagulan S"
            })
            }).then(response => {
            console.log(response);
            });
    }

    render() { 
        return <div style={{display:"flex",width:"100%"}}>
                <div style={{width:"calc( 80% - 20px)",minWidth:"700px"}}>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px",
                        }}
                    >
                        <div style={{alignItems:"center",justifyContent:"center",backgroundColor:"white",width:"100%",borderRadius:"10px",boxShadow:"0 0 10px gray",display:"flex"}}>
                            <div style={{fontFamily:"'Dancing Script', cursive",fontSize:"30px",color:"#E44652",paddingRight:"10px"}}>
                                Alumni
                            </div>
                            <div style={{fontSize:"30px",fontWeight:"700",color:"#043353"}}>CONNECT for Hosters</div>
                            <img src="https://image.freepik.com/free-vector/happy-tiny-business-people-dancing-having-fun-drinking-wine-corporate-party-team-building-activity-corporate-event-idea-concept-pinkish-coral-bluevector-isolated-illustration_335657-1414.jpg" alt="" height="180px"/>
                        </div>
                        <div style={{backgroundColor:"white",width:"calc( 100% - 80px)",borderRadius:"10px",padding:"40px",marginTop:"40px",boxShadow:"0 0 10px gray",display:"flex",flexDirection:"column"}}>
                            <div style={{fontSize:"23px",fontWeight:"700",color:"#043353",marginBottom:"20px"}}>Let's get started...</div>
                            <form>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px"}}>Event title<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.event_title} onChange={this.handleChange.bind(this,1)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Poster link<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.poster} onChange={this.handleChange.bind(this,2)} className="profile-input-bar" type="url" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Timings<span style={{color:"red"}}>*</span></div>
                                <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                                    <div style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
                                        <input required value={this.state.sdate} onChange={this.handleChange.bind(this,3)} className="profile-input-bar" type="date" style={{fontSize:"20px",padding:"10px",borderRadius:"10px",marginBottom:"10px"}}></input>
                                        <input required value={this.state.stime} onChange={this.handleChange.bind(this,4)} className="profile-input-bar" type="time" style={{fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                    </div>
                                    <div style={{fontSize:"30px",fontWeight:"500"}}>to</div>
                                    <div style={{display:"flex",flexDirection:"column",alignItems:"end"}}>
                                        <input required value={this.state.edate} onChange={this.handleChange.bind(this,5)} className="profile-input-bar" type="date" style={{fontSize:"20px",padding:"10px",borderRadius:"10px",marginBottom:"10px"}}></input>
                                        <input required value={this.state.etime} onChange={this.handleChange.bind(this,6)} className="profile-input-bar" type="time" style={{fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                    </div>
                                </div>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Event location<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.loc} onChange={this.handleChange.bind(this,7)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Bio<span style={{color:"red"}}>*</span> ( Min 10, Max 120 chars )</div>
                                <input required value={this.state.bio} onChange={this.handleChange.bind(this,8)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Event Description<span style={{color:"red"}}>*</span> ( Min 30 chars )</div>
                                <textarea required value={this.state.des} onChange={this.handleChange.bind(this,9)} className="profile-input-bar" style={{border:"2px solid black",minHeight:"150px",resize:"vertical",width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></textarea>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Registration link<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.reg_link} onChange={this.handleChange.bind(this,10)} className="profile-input-bar" type="url" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{width:"calc( 20% - 20px)",margin:"10px"}}>
                    <div style={{position:"fixed",width:"calc( 20% )"}}>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.event_title==="")?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Event title</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                this.urlValidator(this.state.poster)
                            }
                            <div style={{fontWeight:"500"}}>Poster Link</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.sdate===null || this.state.stime===null || this.state.edate===null || this.state.etime===null || this.state.sdate>this.state.edate || this.state.stime>this.state.etime)?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Timings</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.loc==="")?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Event location</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.bio.length>120 || this.state.bio.length<10)?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Bio</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.des.length<30)?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Event Description</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                this.urlValidator(this.state.reg_link)
                            }
                            <div style={{fontWeight:"500"}}>Registration Link</div>
                        </div>
                        <div style={{height:"10px"}}/>
                        <div className="profile-add-button" onClick={this.postData.bind(this)} style={{boxShadow:"0 0 10px gray",cursor:"pointer",alignItems:"center",backgroundColor:"#065285",padding:"10px",borderRadius:"10px",display:"flex",width:"calc(100% - 20px)",color:"white"}}>
                            <PublishIcon  style={{fontSize:"30px"}}/>
                            <div style={{paddingLeft:"10px",}}>
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
        </div>;
    }
}
 
export default AddEvent;