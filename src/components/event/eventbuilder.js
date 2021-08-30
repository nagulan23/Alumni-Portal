import React from 'react'
import Eventfilter from "./eventfilter"
import Eventcard from "./eventcard"
import footer_logo from "../../assets/transparent-logo.png"
import SortIcon from '@material-ui/icons/Sort';
import Button from "@material-ui/core/Button"

function Eventbuilder() {
    return (
        <div>
          <div style={{ paddingTop:"3%",paddingLeft: "85%", Color: "415a80" }}>
              <Button variant="contained" color="primary">
                Add Event{" "}
              </Button>
            </div>
          <div
            style={{
              paddingTop:"5%",
              display:"flex",
              justifyContent:"space-evenly",
            }}
          >
            <div class="PastEvents">Past Events</div>
            <div class="PresentEvents">Present Events</div>
            <div class="FutureEvents">Future Events</div>
            <SortIcon/>
          </div>
          <div style={{ height: "20px", width: "100%" }}></div>
          <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "13%",
              paddingTop: "2%",
              paddingRight: "13%",
            }}
          >
            <Eventcard />
            <div style={{ height: "20px", width: "100%" }}></div>
            <Eventcard />
            <div style={{ height: "20px", width: "100%" }}></div>
            <Eventcard />
            <div style={{ height: "20px", width: "100%" }}></div>
            <Eventcard />
            <div style={{ height: "20px", width: "100%" }}></div>
            <Eventcard />
          </div>
        </div>
        <div style={{ height: "50px", width: "100%" }}></div>
        </div>
    )
}

export default Eventbuilder
