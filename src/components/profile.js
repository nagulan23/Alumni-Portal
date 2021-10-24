import React, { Component } from 'react';
import './profile.css';
import LinkIcon from '@material-ui/icons/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";
import MyJob from './myJobs';
import AddJob from './addJob';
import MyEvents from './myEvents';
import AddEvent from './addEvents';
import MyBlogs from './myBlogs';
import AddBlog from './addBlog';

class ProfilePage extends Component {
    state = { 
        tab:"profile",
    }

    hoverTabChange(tab){
        if(!this.state.tab.includes(tab)){
            document.getElementById(tab+"2").style.backgroundColor = "#ff4f5c ";
        }
    }

    exitTabChange(tab){
        if(!this.state.tab.includes(tab)){
            document.getElementById(tab+"1").style.backgroundColor = "#E44652 ";
            document.getElementById(tab+"2").style.backgroundColor = "#E44652 ";
            document.getElementById(tab+"2").style.color = "#FAF8F0 ";
            document.getElementById(tab+"3").style.backgroundColor = "#E44652 ";
        }
    }

    changeTab(tab){
        if(tab==="out")
            this.props.history.push("/signin");
        this.setState({ tab:tab});
    }

    render() { 
        return ( 
            <div style={{width:"100%",display:"flex",flexDirection:"row"}}>
                <div style={{position:"fixed",width:"10%",minWidth:"150px",backgroundColor:"#E44652",borderBottomRightRadius:"20px",boxShadow:"-20px 5px 20px gray"}}>
                    <div style={{boxShadow:"-2px -2px 5px black",marginLeft:"10px",marginTop:"10px",width:"100%",backgroundImage:`url("https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754")`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                    </div>
                    <div style={{color:"#FAF8F0",textAlign:"right",paddingBottom:"40px",paddingTop:"40px"}}>
                        <div id="profile1" style={{backgroundColor:this.state.tab==="profile"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderBottomRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                        <div id="profile2" onClick={this.changeTab.bind(this,"profile")} onMouseEnter={this.hoverTabChange.bind(this,"profile")} onMouseLeave={this.exitTabChange.bind(this,"profile")}style={{cursor:"pointer",fontSize:"20px",fontWeight:"700",padding:"5px",paddingRight:"20px",marginLeft:"20px",borderBottomLeftRadius:"10px",borderTopLeftRadius:"10px",backgroundColor:this.state.tab==="profile"? "#FAF8F0":"#E44652",color:this.state.tab==="profile"? "#E44652":"#FAF8F0"}}>
                            Profile
                        </div>
                        <div id="profile3" style={{backgroundColor:this.state.tab==="profile"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderTopRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                        <div id="events1" style={{backgroundColor:this.state.tab==="events" || this.state.tab==="addevents"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderBottomRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                        <div id="events2" onClick={this.changeTab.bind(this,"events")} onMouseEnter={this.hoverTabChange.bind(this,"events")} onMouseLeave={this.exitTabChange.bind(this,"events")}style={{cursor:"pointer",fontSize:"20px",fontWeight:"700",padding:"5px",paddingRight:"20px",marginLeft:"20px",borderBottomLeftRadius:"10px",borderTopLeftRadius:"10px",backgroundColor:this.state.tab==="events" || this.state.tab==="addevents"? "#FAF8F0":"#E44652",color:this.state.tab==="events" || this.state.tab==="addevents"? "#E44652":"#FAF8F0"}}>
                            Events
                        </div>
                        <div id="events3" style={{backgroundColor:this.state.tab==="events" || this.state.tab==="addevents"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderTopRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                        <div id="referrals1" style={{backgroundColor:this.state.tab==="referrals" || this.state.tab==="addreferrals"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderBottomRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                        <div id="referrals2" onClick={this.changeTab.bind(this,"referrals")} onMouseEnter={this.hoverTabChange.bind(this,"referrals")} onMouseLeave={this.exitTabChange.bind(this,"referrals")}style={{cursor:"pointer",fontSize:"20px",fontWeight:"700",padding:"5px",paddingRight:"20px",marginLeft:"20px",borderBottomLeftRadius:"10px",borderTopLeftRadius:"10px",backgroundColor:this.state.tab==="referrals" || this.state.tab==="addreferrals"? "#FAF8F0":"#E44652",color:this.state.tab==="referrals" || this.state.tab==="addreferrals"? "#E44652":"#FAF8F0"}}>
                            Referrals
                        </div>
                        <div id="referrals3"style={{backgroundColor:this.state.tab==="referrals" || this.state.tab==="addreferrals"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderTopRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                        <div id="blogs1"style={{backgroundColor:this.state.tab==="blogs"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderBottomRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                        <div id="blogs2" onClick={this.changeTab.bind(this,"blogs")} onMouseEnter={this.hoverTabChange.bind(this,"blogs")} onMouseLeave={this.exitTabChange.bind(this,"blogs")}style={{cursor:"pointer",fontSize:"20px",fontWeight:"700",padding:"5px",paddingRight:"20px",marginLeft:"20px",borderBottomLeftRadius:"10px",borderTopLeftRadius:"10px",backgroundColor:this.state.tab==="blogs"? "#FAF8F0":"#E44652",color:this.state.tab==="blogs"? "#E44652":"#FAF8F0"}}>
                            Blogs
                        </div>
                        <div id="blogs3"style={{backgroundColor:this.state.tab==="blogs"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderTopRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                        
                        <div id="out1"style={{backgroundColor:this.state.tab==="out"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderBottomRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                        <div id="out2" onClick={this.changeTab.bind(this,"out")} onMouseEnter={this.hoverTabChange.bind(this,"out")} onMouseLeave={this.exitTabChange.bind(this,"out")}style={{cursor:"pointer",fontSize:"20px",fontWeight:"700",padding:"5px",paddingRight:"20px",marginLeft:"20px",borderBottomLeftRadius:"10px",borderTopLeftRadius:"10px",backgroundColor:this.state.tab==="out"? "#FAF8F0":"#E44652",color:this.state.tab==="out"? "#E44652":"#FAF8F0"}}>
                            Sign out
                        </div>
                        <div id="out3"style={{backgroundColor:this.state.tab==="out"? "#FAF8F0":"#E44652"}}>
                            <div style={{height:"10px",borderTopRightRadius:"10px",backgroundColor:"#E44652"}}>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:"10%",minWidth:"150px",height:"700px"}}>

                </div>
                <div style={{margin:"50px",width:"90%",minWidth:"600px"}}>
                    {
                        (this.state.tab==='profile')?
                        <About/>:
                        (this.state.tab==='addreferrals')?
                        <AddJob/>:
                        (this.state.tab==='addblog')?
                        <AddBlog/>:
                        (this.state.tab==='blogs')?
                        <MyBlogs changeTab={this.changeTab.bind(this,"addblog")}/>:
                        (this.state.tab==='referrals')?
                        <MyJob changeTab={this.changeTab.bind(this,"addreferrals")}/>:
                        (this.state.tab==='addevents')?
                        <AddEvent/>:
                        (this.state.tab==='events')?
                        <MyEvents changeTab={this.changeTab.bind(this,"addevents")}/>:
                        <div/>
                    }
                </div>
            </div>
        );
    }
}
 
export default withRouter(ProfilePage);


class About extends Component {
    state = { 
        name:"NAGULAN S",
        headline:"Software Developer & ML enthusiast | B.tech CSE",
        location:"Madurai, Tamil Nadu, India",
        about:"A diligent, dedicated, creative budding engineer with a positive attitude: An enthusiastic learner seeking an entry-level position to gain knowledge and experience in Machine Learning, Software Development, Data Science, and related areas, enabling the deployment of relevant skills resulting in mutual growth.",
    }
    render() { 
        return ( 
            <div style={{display:"flex",width:"100%"}}>
                <div style={{width:"80%"}}>
                    <div style={{fontSize:"30px",fontWeight:"500"}}>{this.state.name}</div>
                    <div style={{}}>{this.state.headline}</div>
                    <div style={{fontSize:"14px",color:"gray"}}>{this.state.location}</div>
                    <div style={{backgroundColor:"white",width:"calc( 100% - 80px )",padding:"20px",borderRadius:"10px",marginTop:"40px",boxShadow:"0 0 10px gray"}}>
                        <div style={{fontSize:"23px",fontWeight:"700",color:"#043353",marginBottom:"20px"}}>About</div>
                        <div style={{}}>{this.state.about}</div>
                    </div>
                    <div style={{backgroundColor:"white",width:"calc( 100% - 80px )",padding:"20px",borderRadius:"10px",marginTop:"40px",boxShadow:"0 0 10px gray"}}>
                        <div style={{fontSize:"23px",fontWeight:"700",color:"#043353",marginBottom:"20px"}}>Experience</div>
                        <Timeline  align="alternate" >
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">Apr 2020 - Jun 2020</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography >
                                        <div style={{paddingBottom:"30px"}}>
                                            <div style={{fontWeight:"700"}}>
                                                Stack Nation
                                            </div>
                                            <div style={{fontSize:"15px", color:"gray"}}>
                                                Mobile Application Developer
                                            </div>
                                            <div style={{fontSize:"15px"}}>
                                                Developed User Interface using Flutter & Implemented Backend with REST APIs for multiple Mobile Applications. One of my creations during this internship was "Herody" (Available in Playstore).
                                            </div>
                                        </div>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">Oct 2020 - Aug 2021</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>
                                        <div style={{paddingBottom:"30px"}}>
                                            <div style={{fontWeight:"700"}}>
                                                Stack Nation
                                            </div>
                                            <div style={{fontSize:"15px", color:"gray"}}>
                                                Mobile Application Developer
                                            </div>
                                            <div style={{fontSize:"15px"}}>
                                                Developed User Interface using Flutter & Implemented Backend with REST APIs for multiple Mobile Applications. One of my creations during this internship was "Herody" (Available in Playstore).
                                            </div>
                                        </div>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">Aug 2021 - Present</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>
                                        <div style={{paddingBottom:"30px"}}>
                                            <div style={{fontWeight:"700"}}>
                                                Stack Nation
                                            </div>
                                            <div style={{fontSize:"15px", color:"gray"}}>
                                                Mobile Application Developer
                                            </div>
                                            <div style={{fontSize:"15px"}}>
                                                Developed User Interface using Flutter & Implemented Backend with REST APIs for multiple Mobile Applications. One of my creations during this internship was "Herody" (Available in Playstore).
                                            </div>
                                        </div>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div style={{backgroundColor:"white",width:"calc( 100% - 80px )",padding:"20px",borderRadius:"10px",marginTop:"40px",boxShadow:"0 0 10px gray"}}>
                        <div style={{fontSize:"23px",fontWeight:"700",color:"#043353",marginBottom:"20px"}}>Education</div>
                        <Timeline  align="alternate" >
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">2018 - 2022</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography >
                                        <div style={{paddingBottom:"30px"}}>
                                            <div style={{fontWeight:"700"}}>
                                                Amrita Vishwa Vidyapeetham, Coimbatore
                                            </div>
                                            <div style={{fontSize:"15px", color:"gray"}}>
                                                Bachelor of Technology - Computer Science
                                            </div>
                                            <div style={{fontSize:"15px"}}>
                                                CGPA: 9.38
                                            </div>
                                        </div>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">2016 - 2018</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>
                                        <div style={{paddingBottom:"30px"}}>
                                            <div style={{fontWeight:"700"}}>
                                                VMJ Higher Secondary School, Madurai
                                            </div>
                                            <div style={{fontSize:"15px", color:"gray"}}>
                                                12th - Computer Science
                                            </div>
                                            <div style={{fontSize:"15px"}}>
                                                Percentage: 92%
                                            </div>
                                        </div>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">2015 - 2016</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>
                                        <div style={{paddingBottom:"30px"}}>
                                            <div style={{fontWeight:"700"}}>
                                                VMJ Higher Secondary School, Madurai
                                            </div>
                                            <div style={{fontSize:"15px", color:"gray"}}>
                                                10th - Computer Science
                                            </div>
                                            <div style={{fontSize:"15px"}}>
                                                Percentage: 94.5%
                                            </div>
                                        </div>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div style={{backgroundColor:"#043353",width:"calc( 100% - 80px )",padding:"20px",borderRadius:"10px",marginTop:"40px",boxShadow:"0 0 10px gray"}}>
                        <div style={{fontSize:"23px",fontWeight:"700",color:"white",marginBottom:"20px"}}>Skills & Endorsement</div>
                        <div style={{display:"flex",flexWrap: "wrap"}}>
                            <div style={{display:"flex",marginRight:"40px"}}>
                                <div style={{color:"white",fontSize:"18px",paddingRight:"10px"}}>Mobile Applications</div>
                                <div style={{color:"#E44652 ",fontSize:"18px",fontWeight:"700"}}>99</div>
                            </div>
                            <div style={{display:"flex",marginRight:"40px"}}>
                                <div style={{color:"white",fontSize:"18px",paddingRight:"10px"}}>Cloud Computing</div>
                                <div style={{color:"#E44652 ",fontSize:"18px",fontWeight:"700"}}>92</div>
                            </div>
                            <div style={{display:"flex",marginRight:"40px"}}>
                                <div style={{color:"white",fontSize:"18px",paddingRight:"10px"}}>Software Engineerings</div>
                                <div style={{color:"#E44652 ",fontSize:"18px",fontWeight:"700"}}>57</div>
                            </div>
                            <div style={{display:"flex",marginRight:"40px"}}>
                                <div style={{color:"white",fontSize:"18px",paddingRight:"10px"}}>Start-ups</div>
                                <div style={{color:"#E44652 ",fontSize:"18px",fontWeight:"700"}}>40</div>
                            </div>
                            <div style={{display:"flex",marginRight:"40px"}}>
                                <div style={{color:"white",fontSize:"18px",paddingRight:"10px"}}>Agile Methodologies</div>
                                <div style={{color:"#E44652 ",fontSize:"18px",fontWeight:"700"}}>25</div>
                            </div>
                            <div style={{display:"flex",marginRight:"40px"}}>
                                <div style={{color:"white",fontSize:"18px",paddingRight:"10px"}}>Product Management</div>
                                <div style={{color:"#E44652 ",fontSize:"18px",fontWeight:"700",paddingRight:"10px"}}>24</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:"20%"}}>
                    <div style={{position:"fixed"}}>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" width="30px" style={{paddingRight:"10px"}}/>
                            <a href="https://www.linkedin.com/in/nagulan-s/" style={{overflowWrap:"break-word",width:"calc( 100% - 40px)",textDecoration:"none",color:"#0076b6",fontSize:"18px",fontWeight:"500"}}>nagulan-s</a>
                        </div>
                        <div style={{display:"flex",alignItems:"center",paddingTop:"20px"}}>
                            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="" width="30px" style={{paddingRight:"10px"}}/>
                            <a href="https://github.com/nagulan23" style={{overflowWrap:"break-word",width:"calc( 100% - 40px)",textDecoration:"none",color:"#000101",fontSize:"18px",fontWeight:"500"}}>nagulan23</a>
                        </div>
                        <div style={{display:"flex",alignItems:"center",paddingTop:"20px"}}>
                            <LinkIcon style={{color:"#E44652",fontSize:"30px",paddingRight:"10px"}}/>
                            <a href="https://nagulans.netlify.app/" style={{overflowWrap:"break-word",width:"calc( 100% - 40px)",textDecoration:"none",color:"#000101",fontSize:"15px",fontWeight:"500"}}>https://nagulans.netlify.app</a>
                        </div>
                        <div style={{display:"flex",alignItems:"center",paddingTop:"20px"}}>
                            <LocationOnIcon style={{color:"#E44652",fontSize:"30px",paddingRight:"10px"}}/>
                            <a href="https://maps.google.com/?q=49, Meenakshi nagar, 6th west cross street, Villapuram, Madurai- 625012, Tamilnadu, India." style={{overflowWrap:"break-word",width:"calc( 100% - 40px)",textDecoration:"none",color:"#000101",fontSize:"15px",fontWeight:"500"}}>49, Meenakshi nagar, 6th west cross street, Villapuram, Madurai- 625012, Tamilnadu, India.</a>
                        </div>
                        <div style={{display:"flex",alignItems:"center",paddingTop:"20px"}}>
                            <EmailIcon style={{color:"#E44652",fontSize:"30px",paddingRight:"10px"}}/>
                            <div href="" style={{overflowWrap:"break-word",width:"calc( 100% - 40px)",textDecoration:"none",color:"#000101",fontSize:"15px",fontWeight:"500"}}>nagulan1645@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}