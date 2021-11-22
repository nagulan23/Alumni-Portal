import React, { Component } from 'react';
import c1 from '../../assets/pen.jpg';
import InBlogPage from './inblog';
import c3 from '../../assets/waterfall.jpg';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from "react-router-dom";
import './blog.css';
import Blogcard from './blogcard';
import axios from 'axios';
class BlogPage extends Component {

    state= {
        data:null,
      }
    
      constructor(props) {
        super(props);
        console.log("blogs............");
        this.getData();
      }

    getData() {
        console.log("getting blogs............");
    
        var datalist=[];
        axios.get('http://localhost:8081/final/blogs')
        .then(jlist=> {
          console.log(jlist.data.data);
          jlist.data.data.forEach((jid, i)  => {
            fetch('http://localhost:8081/final/blog', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
              },
              body: JSON.stringify({
                "blogid":jid
              })
            }).then(response => {
              if (response.ok) {
                response.json().then(json => {
                  console.log(json.data)
                  datalist.push(json.data);
                  this.setState({data:datalist});
                });
              }
            });
          });
          console.log(datalist);
        });
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
                {
                    (this.state.data==null)?
                    <div style={{alignSelf:"center"}}></div>:
                    this.state.data.map((di)=>{
                        return <div>
                        <Blogcard data={di}/>
                        <div style={{ height: "20px", width: "100%" }}></div>
                        </div>
                    })
                    }
            </div>


        );
    }
}

export default withRouter(BlogPage);