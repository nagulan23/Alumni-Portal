import React, { Component } from 'react';
import Banner from '../assets/banner.jpg';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import c1 from '../assets/atlassian.png';
import c2 from '../assets/microsoft.png';
import c3 from '../assets/cisco.png';
import c4 from '../assets/volvo.png';
import c5 from '../assets/intuit.png';
import c6 from '../assets/amazon.svg';
import c7 from '../assets/flipkart.png';
import c8 from '../assets/intel.png';
import c9 from '../assets/bosch.png';
import c10 from '../assets/providence.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './home.css';

class Home extends Component {
    state = { 
        count:"500",
    }
    render() { 
        return ( 
            <div >
                <div style={{position:"relative"}}>
                    <img src={Banner} alt="" width="100%"/>
                    <div style={{padding:"10px",backgroundColor:"#E44652",color:"#FAF8F0",position:"absolute",top:"80%",left:"80%",float:"right",display:"flex"}}>
                        Discover {this.state.count}+ Amritians&nbsp;&nbsp;&nbsp;
                        <ArrowForwardIos/>
                    </div>
                </div>
                <div style={{padiing:"10px",textAlign:"center",boxShadow:"0 0 10px #E44652",marginTop:"-2px",fontSize:"13px",fontWeight:"500"}}>
                    NIRF rank 4 &nbsp;&nbsp;•&nbsp;&nbsp; 200+ Courses &nbsp;&nbsp;•&nbsp;&nbsp; 6 Campuses &nbsp;&nbsp;•&nbsp;&nbsp; Cutting edge B.Tech programmes &nbsp;&nbsp;•&nbsp;&nbsp; Highest L.P.A 66CTC
                </div>
                <div style={{backgroundColor:"white",display:"flex",flexDirection:"column",margin:"50px",boxShadow:"0 0 10px gray",borderRadius:"10px",alignItems:"center",padding:"15px",paddingRight:"70px",paddingLeft:"70px"}}>
                    <div style={{fontSize:"20px",fontWeight:"700",color:"#282726",marginBottom:"20px"}}>
                        Get referred to jobs
                    </div>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"20px"}}>
                        <img src={c1} alt="" style={{objectFit:"contain",width:"10%"}}/>
                        <img src={c2} alt="" style={{objectFit:"contain",width:"10%"}}/>
                        <img src={c3} alt="" style={{objectFit:"contain",width:"10%"}}/>
                        <img src={c4} alt="" style={{objectFit:"contain",width:"10%"}}/>
                        <img src={c5} alt="" style={{objectFit:"contain",width:"10%"}}/>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <img src={c6} alt="" style={{objectFit:"contain",width:"10%"}}/>
                        <img src={c7} alt="" style={{objectFit:"contain",width:"10%"}}/>
                        <img src={c8} alt="" style={{objectFit:"contain",width:"10%"}}/>
                        <img src={c9} alt="" style={{objectFit:"contain",width:"10%"}}/>
                        <img src={c10} alt="" style={{objectFit:"contain",width:"10%"}}/>
                    </div>
                    <button style={{width:"300px",border:"0",backgroundColor:"#E4DFCF",color:"#E44652",fontSize:"20px",fontWeight:"600",padding:"7px",borderRadius:"10px",marginTop:"20px",cursor:"pointer"}}>View Openings</button>
                </div>
                <div style={{display:"flex",flexDirection:"column",margin:"50px"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}}>
                        <span style={{color:"#E44652",fontWeight:"bold",paddingRight:"10px",paddingBottom:"1px",fontSize:"20px"}}>
                            UPCOMING
                        </span>
                        <span style={{fontWeight:"500",fontSize:"25px"}}>
                            EVENTS
                        </span>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
                        <div style={{ width:"3px",backgroundColor:"#E44652",marginLeft:"8px"}}/>
                        
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",padding:"10px",paddingRight:"50px",paddingLeft:"50px"}}>
                            <UpEvents img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-women%27s-ladies-day-high-tea-event-design-template-9418f1a5bb35985553ced03545c068a3.jpg?ts=1594475806"/>
                            <UpEvents img="https://avaanacapital.com/wp-content/uploads/2021/02/Anjali-Bansal-Creative-2.jpeg"/>
                            <UpEvents img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-men%27s-seminar-conference-event-design-template-62babdc434d2e6c00d4d59bd7d4dcbf3.jpg?ts=1594476123"/>
                            <UpEvents img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/guest-speaker-flyer-template-5250d56f5fc2f87ce5bb3604a1462333.jpg?ts=1561497408"/>
                        </div>
                    </div>
                </div>
                <Blogs/>
                <Highlight/>
                <div style={{height:"50px"}}/>
            </div>
         );
    }
}
 
export default Home;

class UpEvents extends Component {
    state = { 
    }

    render() { 
        return ( 
            <div className="ue-card" style={{display:"flex",flexDirection:"column",width:"20%",cursor:"pointer"}}>
                <div style={{width:"100%",backgroundImage:`url(${this.props.img})`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <div style={{color:"#E44652",fontWeight:"bold",paddingRight:"20px",paddingTop:"10px"}}>
                            AUG
                        </div>
                        <div style={{color:"#E44652",fontWeight:"bold"}}>
                            28
                        </div>
                    </div>
                    <div style={{ width:"2px",backgroundColor:"#E44652",marginTop:"10px"}}/>
                    <div style={{color:"#282726",fontWeight:"500",paddingLeft:"20px",paddingTop:"10px"}}>
                        World Sanskrit Day Vishvavangmayi
                    </div>
                </div>
            </div>
        );
    }
}

class Blogs extends Component {
    state = { 
    }
    render() { 
        return ( 
            <div style={{display:"flex",flexDirection:"column",margin:"50px"}}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}}>
                    <span style={{color:"#E44652",fontWeight:"bold",paddingRight:"10px",paddingBottom:"1px",fontSize:"20px"}}>
                        FEATURED
                    </span>
                    <span style={{fontWeight:"500",fontSize:"25px"}}>
                        BLOGS
                    </span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",padding:"50px",paddingTop:"20px"}}>
                    <div className="blog-card" style={{width:"50%"}}>
                        <div style={{position:"relative",width:"100%",backgroundImage:`url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-women%27s-ladies-day-high-tea-event-design-template-9418f1a5bb35985553ced03545c068a3.jpg?ts=1594475806")`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                            <div style={{position:"absolute",bottom:"0px",width:"calc( 100% - 40px )",fontSize:"20px",padding:"20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",float:"bottom"}}>Amrita Organizes National Webinar on Booming Careers in Science in the Past-Covid Era</div>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",width:"25%",justifyContent:"space-between"}}>
                        <div className="blog-card" style={{position:"relative",width:"100%",backgroundImage:`url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-women%27s-ladies-day-high-tea-event-design-template-9418f1a5bb35985553ced03545c068a3.jpg?ts=1594475806")`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                            <div style={{position:"absolute",bottom:"0px",width:"calc( 100% - 40px )",fontSize:"15px",padding:"20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",float:"bottom"}}>Amrita Organizes National Webinar on Booming Careers in Science in the Past-Covid Era</div>
                        </div>
                        <div className="blog-card" style={{position:"relative",width:"100%",backgroundImage:`url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-women%27s-ladies-day-high-tea-event-design-template-9418f1a5bb35985553ced03545c068a3.jpg?ts=1594475806")`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                            <div style={{position:"absolute",bottom:"0px",width:"calc( 100% - 40px )",fontSize:"15px",padding:"20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",float:"bottom"}}>Amrita Organizes National Webinar on Booming Careers in Science in the Past-Covid Era</div>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",width:"25%",justifyContent:"space-between"}}>
                        <div className="blog-card" style={{position:"relative",width:"100%",backgroundImage:`url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-women%27s-ladies-day-high-tea-event-design-template-9418f1a5bb35985553ced03545c068a3.jpg?ts=1594475806")`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                            <div style={{position:"absolute",bottom:"0px",width:"calc( 100% - 40px )",fontSize:"15px",padding:"20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",float:"bottom"}}>Amrita Organizes National Webinar on Booming Careers in Science in the Past-Covid Era</div>
                        </div>
                        <div className="blog-card" style={{position:"relative",width:"100%",backgroundImage:`url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-women%27s-ladies-day-high-tea-event-design-template-9418f1a5bb35985553ced03545c068a3.jpg?ts=1594475806")`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                            <div style={{position:"absolute",bottom:"0px",width:"calc( 100% - 40px )",fontSize:"15px",padding:"20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",float:"bottom"}}>Amrita Organizes National Webinar on Booming Careers in Science in the Past-Covid Era</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Highlight extends Component {
    state = { 
    }
    render() { 
        return ( 
            <Carousel autoPlay={true} showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true} interval={2000}>
                <div style={{height:"420px",position:"relative",display:"flex",alignItems:"center"}}>
                    <div style={{width:"100%",position:"absolute",display:"flex",justifyContent:"space-between"}}>
                        <div style={{paddingLeft:"50px"}}>
                            <img src="https://www.amrita.edu/sites/default/files/cutting-life-amrita.png" alt="" style={{objectFit:"contain",height:"400px",width:"100%",boxShadow:"0 0 10px black",borderRadius:"200px"}}/>
                        </div>
                        <div></div>
                    </div>
                    <div style={{backgroundColor:"#043353 ",padding:"30px",paddingLeft:"500px",textAlign:"left",paddingTop:"0px"}}>
                        <div style={{fontFamily: "'Secular One', sans-serif",fontSize:"80px",marginBottom:"-40px",color:"#E44652 "}}>
                            "
                        </div>
                        <div style={{color:"white",fontSize:"18px"}}>
                        Amrita Vishwa Vidyapeetham has always given paramount importance to research. As directed by its Chancellor, Amma, the research activities at Amrita are directed towards societal, humanitarian and community development, and relief.<br/><br/>Many centres of excellence have been started in cutting-edge areas like Wireless Networks & Applications, Cyber Security, Computational Engineering & Networking, Virtual Labs, E-learning, Haptics, Educational Technologies, Nanosciences & Molecular Medicine, Biomedical Engineering, Cancer Prevention & Cure, Biostatistics and Environmental Sciences.
                        </div>
                    </div>
                </div>
                <div style={{height:"420px",position:"relative",display:"flex",alignItems:"center"}}>
                    <div style={{width:"100%",position:"absolute",display:"flex",justifyContent:"space-between"}}>
                        <div style={{paddingLeft:"50px"}}>
                            <img src="https://www.amrita.edu/sites/default/files/studentclub-life-amrita.png" alt="" style={{objectFit:"contain",height:"400px",width:"100%",boxShadow:"0 0 10px black",borderRadius:"200px"}}/>
                        </div>
                        <div></div>
                    </div>
                    <div style={{backgroundColor:"#043353 ",padding:"30px",paddingLeft:"500px",textAlign:"left",paddingTop:"0px"}}>
                        <div style={{fontFamily: "'Secular One', sans-serif",fontSize:"80px",marginBottom:"-40px",color:"#E44652 "}}>
                            "
                        </div>
                        <div style={{color:"white",fontSize:"18px"}}>
                        Amrita encourages students to actively participate in various Student Clubs and Groups. These clubs and group activities enhance the overall development of the students, instilling in them the spirit of teamwork and oneness.
                        </div>
                    </div>
                </div>
                <div style={{height:"420px",position:"relative",display:"flex",alignItems:"center"}}>
                    <div style={{width:"100%",position:"absolute",display:"flex",justifyContent:"space-between"}}>
                        <div style={{paddingLeft:"50px"}}>
                            <img src="https://www.amrita.edu/sites/default/files/culturalfest-life-amrita.png" alt="" style={{objectFit:"contain",height:"400px",width:"100%",boxShadow:"0 0 10px black",borderRadius:"200px"}}/>
                        </div>
                        <div></div>
                    </div>
                    <div style={{backgroundColor:"#043353 ",padding:"30px",paddingLeft:"500px",textAlign:"left",paddingTop:"0px"}}>
                        <div style={{fontFamily: "'Secular One', sans-serif",fontSize:"80px",marginBottom:"-40px",color:"#E44652 "}}>
                            "
                        </div>
                        <div style={{color:"white",fontSize:"18px"}}>
                        Cultural festivals are at the heart of student’s lives at Amrita Vishwa Vidyapeetham. The cultural festivals of India give a glimpse into the tradition of our country and portray its rich cultural heritage.<br/><br/>
                        Numerous and varied cultural festivals are held in all the campuses that offer a unique way of seeing Indian culture at its best.
                        </div>
                    </div>
                </div>
                <div style={{height:"420px",position:"relative",display:"flex",alignItems:"center"}}>
                    <div style={{width:"100%",position:"absolute",display:"flex",justifyContent:"space-between"}}>
                        <div style={{paddingLeft:"50px"}}>
                            <img src="https://www.amrita.edu/sites/default/files/sport-life-amrita.png" alt="" style={{objectFit:"contain",height:"400px",width:"100%",boxShadow:"0 0 10px black",borderRadius:"200px"}}/>
                        </div>
                        <div></div>
                    </div>
                    <div style={{backgroundColor:"#043353 ",padding:"30px",paddingLeft:"500px",textAlign:"left",paddingTop:"0px"}}>
                        <div style={{fontFamily: "'Secular One', sans-serif",fontSize:"80px",marginBottom:"-40px",color:"#E44652 "}}>
                            "
                        </div>
                        <div style={{color:"white",fontSize:"18px"}}>
                            Amrita gives importance to sports as it is a healthy body that can house a healthy mind. Sports play an integral part in moulding and refining the character of an individual, Students are encouraged to take part in all indoor and outdoor games. Every campus has an annual sports meet.
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }
}