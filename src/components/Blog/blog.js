import React, { Component } from 'react';
import c1 from '../../assets/pen.jpg';
import InBlogPage from './inblog';
import c3 from '../../assets/waterfall.jpg';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from "react-router-dom";
class BlogPage extends Component {
    state = {
        pages: 1,
    }

    pageChanges(pgnos) {
        this.setState({ pages: pgnos });
        if (pgnos === 1) {
            this.props.history.push("/inblog");
        }


    }
    render() {
        return (
            <div >

                <div style={{ display: 'flex' }}>

                    <img src={c1} alt="" style={{ paddingTop: '10px', paddingLeft: "500px", height: "55px", width: "50px", paddingRight: "-200px", overflow: "hidden", whiteSpace: "nowrap" }} />
                    <div style={{ fontSize: '30px', paddingLeft: '10px', paddingTop: '25px', fontWeight: "500", color: "#E44652", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                        ALUMNI BLOGS
                    </div>
                </div>
                <div style={{ height: '15px' }}></div>
                <div style={{ borderRight: "6px groove #E44652", right: '95%', height: '40px', position: 'absolute' }}>
                </div>
                <div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ paddingLeft: "85px", fontFamily: "Dancing Script", fontSize: "25px", color: "Black" }}>
                            FROM
                        </div>
                        <div style={{ paddingLeft: "10px", fontFamily: "'Dancing Script', cursive", fontSize: "25px", color: "#E44652 " }}>
                            Alumni
                        </div>
                    </div>
                </div>
                <div style={{ height: '10px' }}></div>
                <div style={{ paddingLeft: '75px' }}>
                    <div style={{ boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)', border: "0.5px ridge #606266", backgroundColor: "white", width: "1000px", height: "200px", margin: "10px", display: 'flex', borderRadius: '10px' }}>

                        <div style={{ flex: '60%' }}>
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

                                <div className={this.state.pages === 1 ? "backgroundColor:'white'" : " "} style={{ paddingLeft: '25px', paddingtop: '40px', fontWeight: 'bold', fontSize: '20px', height: '40px', color: 'black' }}
                                    onClick={this.pageChanges.bind(this, 1)}>
                                    The long awaited technology may change the world, and is the

                                </div>
                            </div>
                            <div style={{ paddingLeft: '25px', paddingtop: '70px', fontSize: '15px', width: '80%', height: '25px' }}>
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
                            <img src={c3} alt="" style={{ paddingBottom: '0px', paddingRight: "70px", height: "180px", width: "300px", paddingTop: "10px" }} />
                        </div>

                    </div>
                    <div style={{ height: '10px' }}></div>
                    <div style={{ boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)', border: "0.5px ridge #606266", backgroundColor: "#415A80", width: "1000px", height: "200px", margin: "10px", display: 'flex', borderRadius: '10px' }}>

                        <div style={{ flex: '60%' }}>
                            <div style={{ height: '10px' }}></div>
                            <div style={{ display: 'flex' }}>

                                <div style={{ borderRadius: "50px", padding: "3px", marginLeft: "10px" }}>
                                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                </div>

                                <div style={{ paddingLeft: '10px', fontSize: '13px', paddingTop: '10px', fontWeight: "500", color: "white", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                                    SRINIVAS
                                </div>

                            </div>

                            <div className={this.state.pages === 1 ? "backgroundColor: '#415A80'" : ""} style={{ paddingLeft: '25px', paddingtop: '40px', fontWeight: 'bold', fontSize: '20px', height: '40px', color: 'white' }}
                                onClick={this.pageChanges.bind(this, 1)}>
                                The long awaited technology may change the world, and is the

                            </div>
                            <div style={{ paddingLeft: '25px', paddingtop: '70px', fontSize: '15px', width: '80%', height: '40px', color: 'white' }}>
                                The long awaited technology may change the world, The long awaited technology may change the world, The long awaited technology may change the world

                            </div>
                            <div style={{ height: '30px' }}></div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ paddingLeft: '25px', fontSize: '13px', height: '15px', color: 'white', width: '50px' }}>
                                    Aug 6
                                </div>
                                <div style={{ paddingLeft: '5px', fontSize: '13px', height: '15px', color: 'white', width: '70px' }}>
                                    5 mins ago
                                </div>
                                <div style={{ width: '20px' }}></div>
                                <div style={{ paddingRight: '0px', paddingLeft: '3px', fontSize: '13px', height: '18px', color: 'black', width: '130px', border: '1.5px ridge black', background: '#FAF8F0' }}>
                                    MACHINE LEARNING
                                </div>
                            </div>
                        </div>
                        <div style={{}}>
                            <img src={c3} alt="" style={{ paddingBottom: '0px', paddingRight: "70px", height: "180px", width: "300px", paddingTop: "10px" }} />
                        </div>

                    </div>
                    <div style={{ height: '10px' }}></div>
                    <div style={{ boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)', border: "0.5px ridge #606266", backgroundColor: "white", width: "1000px", height: "200px", margin: "10px", display: 'flex', borderRadius: '10px' }}>

                        <div style={{ flex: '60%' }}>
                            <div style={{ height: '10px' }}></div>
                            <div style={{ display: 'flex' }}>

                                <div style={{ borderRadius: "50px", padding: "3px", marginLeft: "10px" }}>
                                    <Avatar alt="Remy Sharp" src="https://www.pexels.com/photo/shallow-focus-photo-of-woman-wearing-face-mask-4662950/" />
                                </div>

                                <div style={{ paddingLeft: '10px', fontSize: '13px', paddingTop: '10px', fontWeight: "500", color: "black", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                                    SUDARSHANA
                                </div>

                            </div>

                            <div className={this.state.pages === 1 ? "backgroundColor:'white'" : " "} style={{ paddingLeft: '25px', paddingtop: '40px', fontWeight: 'bold', fontSize: '20px', height: '40px', color: 'black' }}
                                onClick={this.pageChanges.bind(this, 1)}>
                                The long awaited technology may change the world, and is the

                            </div>
                            <div style={{ paddingLeft: '25px', paddingtop: '70px', fontSize: '15px', width: '80%', height: '40px' }}>
                                The long awaited technology may change the world, The long awaited technology may change the world, The long awaited technology may change the world

                            </div>
                            <div style={{ height: '35px' }}></div>
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
                            <img src={c3} alt="" style={{ paddingBottom: '0px', paddingRight: "70px", height: "180px", width: "300px", paddingTop: "10px" }} />
                        </div>

                    </div>

<div style={{height:'20px'}}></div>
                </div>

            </div>


        );
    }
}

export default withRouter(BlogPage);