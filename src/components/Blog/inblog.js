import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import c1 from '../../assets/waterfall.jpg';
import ProfilePage from '../profile';
import { withRouter } from "react-router-dom";
class InBlogPage extends React.Component {


    state = {
        
    }
   
    render() {
        return (
            <div >
                <div style={{ height: '30px' }}></div>
                <div style={{ paddingLeft: '35px', fontSize: '50px', fontWeight: 'bold' }}>
                {this.props.data.title}
                </div>
                <div style={{ height: '20px' }}></div>
                <div style={{ display: 'flex', paddingLeft: '35px' }}>
                    <img src={this.props.data.Image} alt="" style={{ height: "200px", width: "300px", borderRadius: '20px', border: 'ridge black' }} />
                    <div>
                        <div style={{ paddingTop: '20px', height: '80px', width: '500px', paddingLeft: '50px', fontStyle: 'italic' }}> {this.props.data.summary}</div>
                        <div style={{
                            paddingLeft: '100px'
                        }} >
                            <div style={{ Paddingright: '20px', paddingLeft: '20px', fontSize: '20px', height: '25px', color: 'white', width: '210px', border: '2px ridge black', background: '#415A80', borderRadius: '10px' }}>
                            {this.props.data.genre}
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ paddingTop: '40px', paddingLeft: '100px' }}>
                            {this.props.data.date}
                            </div>
                            <div style={{ paddingTop: '40px', paddingLeft: '60px' }}>
                            {this.props.data.time}
                            </div>

                        </div>


                    </div>
                    <div style={{ borderRight: "4px groove black", right: '60%', height: '200px', paddingLeft: '50px' ,paddingBottom:"20px"}}>
                    </div>


                </div>
                <div>
                    <div style={{ display: 'flex' }}>

                        <div style={{ paddingLeft: '50px', width: '850px' }}>
                        {this.props.data.content}
                        </div>

                        <div style={{ borderRight: "4px groove black", height: '350px', paddingRight: '39px' }}>
                        </div>
                        <div >
                            <div style={{ paddingTop: '200px', paddingLeft: '120px' }} >
                                <div style={{ paddingLeft: '50px', borderRadius: "50px", padding: "3px", marginLeft: "10px" }}>
                                    <Avatar alt="Remy Sharp" src={this.props.data.profilepic} />
                                </div>
                            </div>
                            <div>

                                <div style={{ paddingLeft: '115px', fontSize: '16px', paddingTop: '10px', fontWeight: "500", color: "red" }}>
                                {this.props.data.author}
                                </div>
                                <div style={{ paddingLeft: '107px', fontSize: '13px', paddingTop: '10px', fontWeight: "500", color: "red" }}>
                                    Software Developer
                                </div>
                                <div style={{ paddingLeft: '135px', fontSize: '13px', paddingTop: '10px', fontWeight: "500", color: "red" }}>
                                    Intuit
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ height: '30px' }}>
                </div>

            </div>
        );
    }
}


export default InBlogPage;