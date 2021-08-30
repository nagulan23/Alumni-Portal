import React from "react"
import "./jobpage.css"
import img from "../assets/cardinalhealth.png"
import leo from '../assets/7_Leonardo-Dicaprio.jpg'
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

function Jobpage() {
  return (

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "150px",
          paddingRight: "150px",
        }}
      >
        <div className="Box1">
          <div style={{ display: "flex" }}>
            <div style={{ flex: "60%" }}>
              <div className="Title">Software Development</div>
              <div className="Subtitle">Cardinal Health</div>
            </div>
            <img
              src={img}
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
            <WorkOutlineOutlinedIcon style={{ fontSize: "20" }} />
            <div className="Normaltext">2 - 5 years</div>
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
              Not Disclosed
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
              Bangalore,India
            </div>
            <div style={{ paddingLeft: "75%", Color: "415a80" }}>
              <Button variant="contained" color="primary">
                Apply{" "}
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
            Caterpillar is investing in our digital future and our iconic
            products have evolved from mechanical work horses to highly
            sophisticated, electronically-controlled worksite solutions. This
            transformation, along with our smart factories and our integrated
            dealer network, has a wealth of data ready to be leveraged by our
            customers and our dealers. Think you have what it takes to develop
            the software solutions and architect the platform to support
            Caterpillar’s digital revolution?
          </div>
          <br />
          <div className="Normaltext1" style={{ paddingLeft: "25px" }}>
            We at Caterpillar are working to develop the Digital platform and
            industry-leading digital solutions on the digital in support of
            profitable growth for Caterpillar, dealers & our end customers.Come
            join us in this exciting journey and be part of the world class
            organization and play a role in its digital transformation.
          </div>
          <div className="Normaltext1" style={{ paddingLeft: "25px" }}>
            Caterpillar team is currently hiring Software Engineers and Interns
            to work in:
          </div>
          <ul>
            <li className="Normaltext1">
              The Digital Platform development area to build and test components
              of the product on cloud platform
            </li>
            <li className="Normaltext1">
              The application development area to build and test Web/Mobile
              applications on cloud platform catering to Caterpillar Customer
              needs
            </li>
          </ul>
          <div className="Title">
            Responsibilities include but are not limited to:
          </div>
          <ul>
            <li className="Normaltext1">
              Work independently in a platform or application team on
              programming and development assignments in cloud or Proof of
              concept on innovative ideas and/or technologies
            </li>
            <li className="Normaltext1">
              Learn new technology or tool and apply it to improve engineering
              process
            </li>
            <li className="Normaltext1">
              Contribute to platform or application development/test/support
            </li>
          </ul>
        </div>
        <br/>
        <br/>
          <div className="Jobbox">
            <div className="Title">Requirements</div>
            <ul>
            {requirements.map(req=>{
                return(
                    <li>{req.data}</li>
                )
            })}
            </ul>
          </div>
          <br/>
          <br/>
          <div className="Jobbox">
          <div style={{display:"flex",flexDirection:"row"}}>
          <div style={{paddingLeft:"80px",paddingBottom:'20px'}}>
          <img src={leo} alt="memevalue" height = "62px" width="68px" style={{ borderRadius:"50%", objectfit:"contain"}}/>
          </div>
          <div>
          <div className="Normaltext2" style={{paddingLeft:"20px",paddingTop:"10px"}}>Leonardo</div>
          <div className="line2"></div>
          <div className="Normaltext2" style={{paddingTop:"15px",paddingLeft:"21px",fontWeight:"normal"}}>Recruiter at CARDINAL HEALTH</div>
          </div>
          </div>
          </div>
      </div>
  )
}
export default Jobpage
