import React from "react"
import "./eventpage.css"
import img from "../../assets/life.jpeg"
import leo from '../../assets/7_Leonardo-Dicaprio.jpg'
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined"
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import Button from "@material-ui/core/Button"
import DateRangeIcon from '@material-ui/icons/DateRange';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelIcon from '@material-ui/icons/Label';

class Eventpage extends React.Component {
  render() { 
    return <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "150px",
          paddingRight: "150px",
          paddingTop:"50px",
          paddingBottom:"50px"
        }}
      >
        <div className="Box1">
          <div style={{ display: "flex" }}>
            <div style={{ flex: "60%" }}>
              <div className="Title">{this.props.data.Title}</div>
              <div className="Subtitle">{this.props.data.People}</div>
            </div>
            <img
              src={this.props.data.Event_image}
              alt=""
              width="13%"
              height="13%"
              style={{ paddingRight: "30px", paddingTop: "10px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "10px",
              paddingLeft: "25px",
            }}
          >
            <DateRangeIcon style={{ fontSize: "20" }} />
            <div className="Normaltext">20/08/2022</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "10px",
              paddingLeft: "25px",
            }}
          >
            <QueryBuilderIcon style={{ fontSize: "20" }} />
            <div className="Normaltext" style={{ paddingLeft: "5px" }}>
              07:00 pm
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "10px",
              paddingLeft: "25px",
            }}
          >
            <LabelIcon style={{ fontSize: "20" }} />
            <div className="Normaltext" style={{ paddingLeft: "5px" }}>
              {this.props.data.Tags}
            </div>
            <div style={{ paddingLeft: "75%", Color: "415a80" }}>
              <Button variant="contained" color="primary" onClick={()=>window.open(this.props.data.Register_link)}>
                Register{" "}
              </Button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="Jobbox" style={{paddingBottom:"20px"}} >
          <div className="Title">Event Description</div>
          <br />
          <div className="Normaltext1" style={{ PaddingLeft: "25px"}}>
            {this.props.data.Description}
          </div>
        </div>
      </div>
  }
}
 
export default Eventpage;

