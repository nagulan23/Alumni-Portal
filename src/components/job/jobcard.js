import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined"
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined"
import "./jobcard.css"
import img from "../../assets/cardinalhealth.png";
import { withRouter } from "react-router-dom";
import React, { Component } from 'react';

class Jobcard extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Box" onClick={()=>this.props.history.push({pathname:"/jobinfo",state: this.props.data})} style={{cursor:"pointer"}}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "60%" }}>
            <div className="Title">{this.props.data.role}</div>
            <div className="Subtitle">{this.props.data.name}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "20px",
                paddingLeft: "25px",
              }}
            >
              <AttachMoneyIcon style={{ fontSize: "20" }} />
              <div className="Normaltext" style={{ paddingLeft: "5px" }}>
                Highest: {this.props.data.salaryh}
              </div>
              <RoomOutlinedIcon style={{ fontSize: "20" }} />
              <div className="Normaltext" style={{ paddingLeft: "5px" }}>
                {this.props.data.location}
              </div>
            </div>
          </div>
          <img
            src={this.props.data.logo}
            alt=""
            width="100px"
            height="100px"
            style={{ paddingRight: "30px", paddingTop: "30px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "15px",
            paddingLeft: "25px",
          }}
        >
          <DescriptionOutlinedIcon style={{ fontSize: "20" }} />
          <div className="Normaltext" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
              {this.props.data.jobdescription}
          </div>
        </div>
      </div> 
    );
  }
}

export default withRouter(Jobcard);