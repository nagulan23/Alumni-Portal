import React, { Component } from 'react';
import Jobcard from "./job/jobcard"
import PublishIcon from '@material-ui/icons/Publish';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


class AddEvent extends React.Component {

    state={
        company_name:"",
        your_role:"",
        job_title:"",
        job_location:"",
        salary:"",
        job_description:"",
        requirements:""
    }

    handleChange(inputi,event) {
        if(inputi===1){
            this.setState({ company_name: event.target.value });
        }
        else if(inputi===2){
            this.setState({ your_role: event.target.value });
        }
        else if(inputi===3){
            this.setState({ job_title: event.target.value });
        }
        else if(inputi===4){
            this.setState({ job_location: event.target.value });
        }
        else if(inputi===5){
            this.setState({ salary: event.target.value });
        }
        else if(inputi===6){
            this.setState({ job_description: event.target.value });
        }
        else{
            this.setState({ requirements: event.target.value });
        }
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
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-employee-3462299-2895981.png" alt="" height="180px"/>
                        </div>
                        <div style={{backgroundColor:"white",width:"calc( 100% - 80px)",borderRadius:"10px",padding:"40px",marginTop:"40px",boxShadow:"0 0 10px gray",display:"flex",flexDirection:"column"}}>
                            <div style={{fontSize:"23px",fontWeight:"700",color:"#043353",marginBottom:"20px"}}>Let's get started...</div>
                            <form>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px"}}>Company name<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.company_name} onChange={this.handleChange.bind(this,1)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Your role in the hiring process<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.your_role} onChange={this.handleChange.bind(this,2)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Job title<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.job_title} onChange={this.handleChange.bind(this,3)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Job location<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.job_location} onChange={this.handleChange.bind(this,4)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Salary</div>
                                <input value={this.state.salary} onChange={this.handleChange.bind(this,5)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Job Description<span style={{color:"red"}}>*</span></div>
                                <textarea required value={this.state.job_description} onChange={this.handleChange.bind(this,6)} className="profile-input-bar" style={{border:"2px solid black",minHeight:"150px",resize:"vertical",width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></textarea>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Requirements<span style={{color:"red"}}>*</span></div>
                                <textarea required value={this.state.requirements} onChange={this.handleChange.bind(this,7)} className="profile-input-bar" style={{border:"2px solid black",minHeight:"150px",resize:"vertical",width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></textarea>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{width:"calc( 20% - 20px)",margin:"10px"}}>
                    <div style={{position:"fixed",width:"calc( 20% )"}}>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.company_name==="")?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Company name</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.your_role==="")?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Your role in the hiring process</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.job_title==="")?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Job title</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.job_location==="")?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Job location</div>
                        </div>
                        <div style={{display:"flex"}}>
                            <CheckCircleIcon style={{color:"green"}}/>
                            <div style={{fontWeight:"500"}}>Salary</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.job_description==="")?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Job Description</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.requirements==="")?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Requirements</div>
                        </div>
                        <div style={{height:"10px"}}/>
                        <div className="profile-add-button" style={{boxShadow:"0 0 10px gray",cursor:"pointer",alignItems:"center",backgroundColor:"#065285",padding:"10px",borderRadius:"10px",display:"flex",width:"calc(100% - 20px)",color:"white"}}>
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