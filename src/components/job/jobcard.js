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
      <div className="jBox" onClick={()=>this.props.history.push("/jobinfo")} style={{cursor:"pointer"}}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "60%" }}>
            <div className="Title">Software Development</div>
            <div className="Subtitle">Cardinal Health</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "20px",
                paddingLeft: "25px",
              }}
            >
              <WorkOutlineOutlinedIcon style={{ fontSize: "20" }} />
              <div className="Normaltext">2 - 5 years</div>
              <AttachMoneyIcon style={{ fontSize: "20" }} />
              <div className="Normaltext" style={{ paddingLeft: "5px" }}>
                Not Disclosed
              </div>
              <RoomOutlinedIcon style={{ fontSize: "20" }} />
              <div className="Normaltext" style={{ paddingLeft: "5px" }}>
                Bangalore,India
              </div>
            </div>
          </div>
          <img
            src={img}
            alt=""
            width="18%"
            height="18%"
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
          <div className="Normaltext">
            KLA Corporation develops industry-leading equipment and services that
            enable innovation throughout the electronics industry. We provide
            advanced process control and process-enabling solutions for
            manufacturing wafers and reticles ...
          </div>
        </div>
      </div> 
    );
  }
}

export default withRouter(Jobcard);