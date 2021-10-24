import React, { Component } from 'react';
import c1 from '../assets/pen.jpg';
import InBlogPage from '../components/Blog/inblog';
import c3 from '../assets/waterfall.jpg';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from "react-router-dom";
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddBlog from './addBlog';
class MyBlogs extends Component {
    state = {
        pages: 1,
    }

    pageChanges(pgnos) {
        this.setState({ pages: pgnos });
        if (pgnos === 1) {
            this.props.history.push("/inblog");
        
        }
        if (pgnos === 2) {
            this.props.history.push("/addBlog");
        
        }


    }
    render() {
        return (
            <div style={{display:"flex",width:"100%"}} >
            <div style={{width:"calc( 80% - 20px)"}}>
                <div style={{ paddingLeft: '0px' }}>
                    <div style={{ boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)', border: "0.5px ridge #606266", backgroundColor: "white", width: "750px", height: "225px", margin: "10px", display: 'flex', borderRadius: '10px' }}>

                        <div style={{ flex: '90%' }}>
                            <div style={{ height: '10px' }}></div>
                            <div style={{ display: 'flex' }} >

                                <div style={{ borderRadius: "50px", padding: "3px", marginLeft: "10px" }}>
                                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                </div>

                                <div style={{ paddingLeft: '10px', fontSize: '13px', paddingTop: '10px', fontWeight: "500", color: "black" }}>
                                    NAGULAN S
                                </div>

                            </div>
                            <div>

                                <div className={this.state.pages === 1 ? "backgroundColor:'white'" : " "} style={{ paddingLeft: '25px', paddingtop: '40px', fontWeight: 'bold', fontSize: '20px', height: '60px', color: 'black' }}
                                    onClick={this.pageChanges.bind(this, 1)}>
                                    The long awaited technology may change the world, and is the

                                </div>
                            </div>
                            <div style={{ paddingLeft: '25px', paddingtop: '70px', fontSize: '15px', width: '90%', height: '25px' }}>
                                The long awaited technology may change the world, The long awaited techno may change the world, The long awaited technology may change the world

                            </div>
                            <div style={{ height: '45px' }}></div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ paddingLeft: '25px', fontSize: '13px', height: '15px', color: 'black', width: '50px' }}>
                                    Aug 6
                                </div>
                                <div style={{ paddingLeft: '5px', fontSize: '13px', height: '15px', color: 'black', width: '70px' }}>
                                    5 mins ago
                                </div>
                                <div style={{ width: '20px' }}></div>
                                <div style={{ paddingRight: '0px', paddingLeft: '3px', fontSize: '13px', height: '18px', color: 'white', width: '130px', border: '1.5px ridge black', background: '#415A80' }}>
                                    MACHINE LEARNING
                                </div>
                            </div>
                        </div>
                        <div style={{}}>
                            <img src={c3} alt="" style={{ paddingBottom: '0px', paddingRight: "50px", height: "180px", width: "300px", paddingTop: "10px" }} />
                        </div>

                    </div>
                    <div style={{ height: '10px' }}></div>
                    
                   
                </div>

                <div style={{ boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)', border: "0.5px ridge #606266", backgroundColor: "white", width: "750px", height: "225px", margin: "10px", display: 'flex', borderRadius: '10px' }}>

                        <div style={{ flex: '90%' }}>
                            <div style={{ height: '10px' }}></div>
                            <div style={{ display: 'flex' }} >

                                <div style={{ borderRadius: "50px", padding: "3px", marginLeft: "10px" }}>
                                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                </div>

                                <div style={{ paddingLeft: '10px', fontSize: '13px', paddingTop: '10px', fontWeight: "500", color: "black" }}>
                                    NAGULAN S
                                </div>

                            </div>
                            <div>

                                <div className={this.state.pages === 1 ? "backgroundColor:'white'" : " "} style={{ paddingLeft: '25px', paddingtop: '40px', fontWeight: 'bold', fontSize: '20px', height: '60px', color: 'black' }}
                                    onClick={this.pageChanges.bind(this, 1)}>
                                   The long awaited technology may change the world

                                </div>
                            </div>
                            <div style={{ paddingLeft: '25px', paddingtop: '70px', fontSize: '15px', width: '90%', height: '25px' }}>
                            The long awaited technology may change the world, The long awaited techno may change the world, The long awaited technology may change the world

                            </div>
                            <div style={{ height: '45px' }}></div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ paddingLeft: '25px', fontSize: '13px', height: '15px', color: 'black', width: '50px' }}>
                                    Aug 6
                                </div>
                                <div style={{ paddingLeft: '5px', fontSize: '13px', height: '15px', color: 'black', width: '70px' }}>
                                    5 mins ago
                                </div>
                                <div style={{ width: '20px' }}></div>
                                <div style={{ paddingRight: '0px', paddingLeft: '3px', fontSize: '13px', height: '18px', color: 'white', width: '130px', border: '1.5px ridge black', background: '#415A80' }}>
                                    MACHINE LEARNING
                                </div>
                            </div>
                        </div>
                        <div style={{}}>
                            <img src={c3} alt="" style={{ paddingBottom: '0px', paddingRight: "50px", height: "180px", width: "300px", paddingTop: "10px" }} />
                        </div>

                    </div>


                    </div>
                    
                    <div style={{width:"calc( 20% - 20px)",margin:"10px"}}>
                    <div  onClick={()=>this.props.changeTab(this)} className="profile-add-button" style={{boxShadow:"0 0 10px gray",cursor:"pointer",alignItems:"center",backgroundColor:"#065285",padding:"10px",borderRadius:"10px",display:"flex",position:"fixed",width:"calc( 20% - 20px)",color:"white"}}>
                        <AddBoxIcon style={{fontSize:"30px"}}/>
                        <div style={{paddingLeft:"10px",}}>
                            Write a Blog
                        </div>
                    </div>
                </div>
                   
                </div>

            


        );
    }
}

export default withRouter(MyBlogs);