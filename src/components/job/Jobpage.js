import React from "react"
import "./jobpage.css"
import img from "../../assets/cardinalhealth.png"
import leo from '../../assets/7_Leonardo-Dicaprio.jpg'
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined"
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import Button from "@material-ui/core/Button"

const requirements = [
{data:"Successfully completed at least 3 years of Undergraduate degree with academic score > 75% or > 8.0 CGPA "},
{data:" Must be from CSE/IT background "},
{data:" Must demonstrate solid knowledge of computer science fundamentals like data structures and algorithms "},
{data:" Must be able to program in one of the languages Java/Python/C#/C++ "},
{data:"Must have good UI/UX skills "},
{data:"Must be able to use relational and No-SQL databases "},
{data:"Passion for technology and an eagerness to contribute to a team-oriented environment "},
{data:" Must have good communication skills and must be a quick learner "},
{data:" Nice to have good knowledge on Data Engineering, Data warehousing and Big Data concepts "},
{data:" Nice to have knowledge on AWS/Azure cloud native tools"},
]

class Jobpage extends React.Component {
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
          <div className="Title">{this.props.data.role}</div>
          <div className="Subtitle">{this.props.data.name}</div>
        </div>
        <img
          src={this.props.data.logo}
          alt=""
          width="150px"
          height="150px"
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
        <AttachMoneyIcon style={{ fontSize: "20" }} />
        <div className="Normaltext" style={{ paddingLeft: "5px" }}>
          Highest: {this.props.data.salaryh}
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
        <RoomOutlinedIcon style={{ fontSize: "20" }} />
        <div className="Normaltext" style={{ paddingLeft: "5px" }}>
          {this.props.data.location}
        </div>
        <div style={{ paddingLeft: "75%", Color: "415a80" }}>
          <Button variant="contained" color="primary" onClick={()=>window.open(this.props.data.link)}>
            Apply
          </Button>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="Jobbox">
      <div className="Title">Job Description</div>
      <br />
      <div className="Normaltext1" style={{ PaddingLeft: "25px" }}>
        {this.props.data.jobdescription}
      </div>
    </div>
    <br/>
    <br/>
    <div className="Jobbox">
      <div className="Title">Job Requirements</div>
      <br />
      <div className="Normaltext1" style={{ PaddingLeft: "25px" }}>
        {this.props.data.requirements}
      </div>
    </div>
    <br/>
    <br/>
    <div className="Jobbox">
      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <img src={this.props.data.uimage} alt="memevalue" height = "62px" width="68px" style={{ borderRadius:"50%", objectfit:"contain"}}/>
        <div className="Normaltext2" style={{paddingLeft:"20px",paddingTop:"10px"}}>{this.props.data.uname}</div>
      </div>
      </div>
    </div>
  }
}
 
export default Jobpage;
