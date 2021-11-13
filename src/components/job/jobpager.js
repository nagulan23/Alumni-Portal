import React from 'react'
import Jobpage from "./Jobpage"

class Jobpager extends React.Component {
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
      <Jobpage data={this.props.data}/>
      </div>
    </div>;
  }
}
 
export default Jobpager;