import React from 'react'
import Jobfilter from "./Jobfilter"
import Jobcard from "./jobcard"
import footer_logo from "../../assets/transparent-logo.png"
import axios from 'axios';

class Pagebuilder extends React.Component {

  state= {
    data:null
  }

  constructor(props) {
    super(props);
    console.log("jobs............");
    this.getData();
  }

  getData() {
    console.log("getting jobs............");
    var datalist=[];
    axios.get('http://e2df-49-204-135-17.ngrok.io/final/jobs')
    .then(jlist=> {
      console.log(jlist.data.data);
      jlist.data.data.forEach((jid, i)  => {
        fetch('http://e2df-49-204-135-17.ngrok.io/final/job', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: JSON.stringify({
            "jobid":jid
          })
        }).then(response => {
          if (response.ok) {
            response.json().then(json => {
              //console.log(json.data)
              datalist.push(json.data);
              this.setState({data:datalist});
            });
          }
        });
      });
      console.log(datalist);
    });
  }

  render() { 
    return <div>
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
          padding: "5%",
          width:"70%",
          minHeight:"1000px",
        }}
      >
        {
          (this.state.data==null)?
          <div className="loader" style={{alignSelf:"center"}}></div>:
          this.state.data.map((di)=>{
            return <div>
              <Jobcard data={di}/>
              <div style={{ height: "20px", width: "100%" }}></div>
            </div>
          })
        }
      </div>
    </div>
    </div>
  }
}
 
export default Pagebuilder;
