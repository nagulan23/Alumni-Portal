import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined"
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined"
import img from "../../assets/life.jpeg"
import DateRangeIcon from '@material-ui/icons/DateRange';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelIcon from '@material-ui/icons/Label';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Eventcard extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Box" onClick={()=>this.props.history.push("/eventinfo")} style={{cursor:"pointer"}}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "60%" }}>
            <div className="Title">Journey to the success</div>
            <div className="Subtitle">By Nagulan S, Srini </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "20px",
                paddingLeft: "25px",
              }}
            >
              <DateRangeIcon style={{ fontSize: "20" }} />
              <div className="Normaltext">20/08/2022</div>
              <QueryBuilderIcon style={{ fontSize: "20" }} />
              <div className="Normaltext" style={{ paddingLeft: "5px" }}>
                07:00 pm
              </div>
              <LabelIcon style={{ fontSize: "20" }} />
              <div className="Normaltext" style={{ paddingLeft: "5px" }}>
                2022 Passed outs, Career, Dream
              </div>
            </div>
          </div>
          <img
            src={img}
            width="13%"
            height="13%"
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
            Nagulan currently working in intuit (2022 passed out), a competitive coder, Full Stack Developer, 
            Machine Learning enthusiast and Srini working in Versa (2022 passed out), a competitiva coder, Full Stack Developer, 
            Machine Learning enthusi...
          </div>
        </div>
      </div> 
    );
  }
}

export default withRouter(Eventcard);
