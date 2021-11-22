import React, { Component } from 'react';
import InBlogPage from './inblog';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from "react-router-dom";
import "./blog.css";

class Blogcard extends Component {

    render() {
        return (
            <div >
            <div style={{ height: '10px' }}></div>
                    <div style={{ paddingLeft: '75px' }}> 
                    <div  className="Boxe" onClick={()=>this.props.history.push({pathname:"/inblog",state: this.props.data})}>
                    <div style={{ display: 'flex'}}>
                    <div>
                    <div style={{ height: '10px' }}>
                        </div>
                    <div style={{ display: 'flex' }} >

                        <div style={{ borderRadius: "50px", padding: "3px", marginLeft: "10px" }}>
                            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>

                        <div className="Name">
                        {this.props.data.author}
                        </div>

                    </div>
                    <div>
                        </div>

                        <div className="Subject">
                        {this.props.data.genre}
                        </div>

                        <div style={{ height: '20px' }}></div>

                        
                        <div style={{ height: '10px' }}></div>
                        <div style={{ display: 'flex' }}>
                            <div className="Date">
                            {this.props.data.date.toString()}
                            </div>
                            <div className="Time">
                            {this.props.data.time.toString()}
                            </div>
                            <div style={{ width: '20px' }}></div>
                            <div className="Genre">
                            {this.props.data.genre}
                            </div>
                        </div>
                        </div>
                        <div style={{}}>
                        <img src={this.props.data.Image} alt="" className="Blogimage" />
                    </div>
                    </div>
                    </div>
                    </div>
                
        
        </div>

    );
}
}

export default withRouter(Blogcard);