import React from 'react'
import footer_logo from "../../assets/transparent-logo.png"
import Eventpage from "./eventpage"

class Eventpager extends React.Component {
  render() { 
    return <div>
      <div
        style={{
        backgroundColor: "#F2F2EE",
        overflow: "auto",
        width: "100%",
        height: "100%",
        }}
        >
        <Eventpage data={this.props.data}/>
      </div>
    </div>;
  }
}
 
export default Eventpager;
