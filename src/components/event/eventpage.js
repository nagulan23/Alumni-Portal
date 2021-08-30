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

function Eventpage() {
  return (

      <div
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
              <div className="Title">Journey to the success</div>
              <div className="Subtitle">By Nagulan S, Srini</div>
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
              2022 Passed outs, Career, Dream
            </div>
            <div style={{ paddingLeft: "75%", Color: "415a80" }}>
              <Button variant="contained" color="primary">
                Register{" "}
              </Button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="Jobbox">
          <div className="Title">Event Description</div>
          <br />
          <div className="Normaltext1" style={{ PaddingLeft: "25px"}}>
          Nagulan currently working in intuit (2022 passed out), a competitive coder, Full Stack Developer, 
          Machine Learning enthusiast and Srini working in Versa (2022 passed out), a competitiva coder, Full Stack Developer, 
          Machine Learning enthusiiast are going to give their live experiences about their life at college and their career steps.
          They did so many hackathons and were a good competitive coders.
          <br/>
          <br/>
          Nagulan S
          <br/>
          A diligent, dedicated, creative budding engineer with a positive attitude: An enthusiastic learner seeking an entry-level 
          position to gain knowledge and experience in Machine Learning, Software Development, Data Science, and related areas, 
          enabling the deployment of relevant skills resulting in mutual growth.
          <br/>
          <br/>
          Srini
          <br/>
          A diligent, dedicated, creative budding engineer with a positive attitude: An enthusiastic learner seeking an entry-level 
          position to gain knowledge and experience in Machine Learning, Software Development, Data Science, and related areas, 
          enabling the deployment of relevant skills resulting in mutual growth.
          </div>
        </div>
      </div>
  )
}
export default Eventpage
