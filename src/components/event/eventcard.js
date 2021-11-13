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
      <div className="Box" backgr onClick={()=>this.props.history.push({pathname:"/eventinfo",state: this.props.data})} style={{cursor:"pointer"}}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "60%" }}>
            <div className="Title">{this.props.data.Title}</div>
            <div className="Subtitle">{this.props.data.People}</div>
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
                {this.props.data.Tags}
              </div>
            </div>
          </div>
          <img
            src={this.props.data.Event_image}
            alt=""
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
          <div className="Normaltext" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
            {this.props.data.Description}
          </div>
        </div>
      </div> 
    );
  }
}

export default withRouter(Eventcard);
