import React from 'react'
import Jobfilter from "./Jobfilter"
import Jobcard from "./jobcard"
import footer_logo from "../../assets/transparent-logo.png"
function Pagebuilder() {
    return (
        <div>
            <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            overflow: "auto",
          }}
        >
          <div style={{display:"flex",width:"400px",backgroundColor:"#415a80",alignItems:"stretch"}}>
            <Jobfilter></Jobfilter>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "5%",
              paddingTop: "5%",
              paddingRight: "5%",
            }}
          >
            <Jobcard />
            <div style={{ height: "20px", width: "100%" }}></div>
            <Jobcard />
            <div style={{ height: "20px", width: "100%" }}></div>
            <Jobcard />
            <div style={{ height: "20px", width: "100%" }}></div>
            <Jobcard />
            <div style={{ height: "20px", width: "100%" }}></div>
            <Jobcard />
            <div style={{ height: "50px", width: "100%" }}></div>
          </div>
        </div>
      </div>
    )
}

export default Pagebuilder
