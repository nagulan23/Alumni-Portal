import React, { Component } from 'react';
import Jobcard from "./job/jobcard"
import PublishIcon from '@material-ui/icons/Publish';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


class AddBlog extends React.Component {

    state={
        blog_title:"",
        image:"",
        date:null,
        time:null,
        genre:"",
        content:""
    }

    handleChange(inputi,blog) {
        if(inputi===1){
            this.setState({ blog_title: blog.target.value });
        }
        else if(inputi===2){
            this.setState({ image: blog.target.value });
        }
        else if(inputi===3){
            this.setState({ date: blog.target.value });
        }
        else if(inputi===4){
            this.setState({ time: blog.target.value });
        }
        else if(inputi===5){
            this.setState({ genre: blog.target.value });

        }
        else{
            this.setState({ content: blog.target.value });
        }
    }
    urlValidator(url){
        console.log("123456789")
        console.log(url)
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
                            <div style={{fontSize:"30px",fontWeight:"700",color:"#043353"}}>CONNECT for Bloggers</div>
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-employee-3462299-2895981.png" alt="" height="180px"/>
                        </div>
                        <div style={{backgroundColor:"white",width:"calc( 100% - 80px)",borderRadius:"10px",padding:"40px",marginTop:"40px",boxShadow:"0 0 10px gray",display:"flex",flexDirection:"column"}}>
                            <div style={{fontSize:"23px",fontWeight:"700",color:"#043353",marginBottom:"20px"}}>Let's get started...</div>
                            <form>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px"}}>Blog title<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.blog_title} onChange={this.handleChange.bind(this,1)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Image link<span style={{color:"red"}}>*</span></div>
                                <input required value={this.state.image} onChange={this.handleChange.bind(this,2)} className="profile-input-bar" type="url" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Date<span style={{color:"red"}}>*</span></div>
                                    <div style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
                                        <input required value={this.state.date} onChange={this.handleChange.bind(this,3)} className="profile-input-bar" type="Date" style={{fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                    </div>

                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Time<span style={{color:"red"}}>*</span></div>
                              
                                    <div style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
                                        
                                        <input required value={this.state.time} onChange={this.handleChange.bind(this,4)} className="profile-input-bar" type="time" style={{fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                    </div>
                                    
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Genre<span style={{color:"red"}}>*</span> ( Min 5, Max 30 chars )</div>
                                <input required value={this.state.genre} onChange={this.handleChange.bind(this,5)} className="profile-input-bar" type="text" style={{width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></input>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"5px",marginTop:"20px"}}>Content Description<span style={{color:"red"}}>*</span> ( Min 100 chars )</div>
                                <textarea required value={this.state.content} onChange={this.handleChange.bind(this,6)} className="profile-input-bar" style={{border:"2px solid black",minHeight:"150px",resize:"vertical",width:"calc( 100% - 20px)",fontSize:"20px",padding:"10px",borderRadius:"10px"}}></textarea>
                                
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{width:"calc( 20% - 20px)",margin:"10px"}}>
                    <div style={{position:"fixed",width:"calc( 20% )"}}>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.blog_title==="")?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Blog title</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                this.urlValidator(this.state.image)
                            }
                            <div style={{fontWeight:"500"}}>Image Link</div>
                        </div>

                        <div style={{display:"flex"}}>
                            {
                                (this.state.date===null)?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Date</div>
                        </div>


                        <div style={{display:"flex"}}>
                            {
                                (this.state.time===null)?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Time</div>
                        </div>


                        
                        <div style={{display:"flex"}}>
                            {
                                (this.state.genre.length>30 || this.state.genre.length<5)?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Genre</div>
                        </div>
                        <div style={{display:"flex"}}>
                            {
                                (this.state.content.length<100)?
                                <CancelIcon style={{color:"red"}} visible="true"/>:
                                <CheckCircleIcon style={{color:"green"}}/>
                            }
                            <div style={{fontWeight:"500"}}>Content</div>
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
 
export default AddBlog;