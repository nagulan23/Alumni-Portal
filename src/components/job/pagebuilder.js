import React from 'react'
import Jobfilter from "./Jobfilter"
import Jobcard from "./jobcard"
import footer_logo from "../../assets/transparent-logo.png"
import axios from 'axios';

class Pagebuilder extends React.Component {

  state= {
    data:null,
    location: ["Bangalore","Chennai" ],
    company : ["abc1","abc2"],
    role: ["Software Engineer" ,"System Engineer" ]
  }

  constructor(props) {
    super(props);
    console.log("jobs............");
    this.getData();
  }

  updateData(data){
    var datalist=[];
    console.log("..........//");
    console.log(data);
    fetch('http://localhost:8081/final/filterjob', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        "location":data.location,
        "name":data.name,
        "role":data.role
      })
    }).then(response => {
      console.log(response);
      if (response.ok) {
        response.json().then(jlist=> {
          console.log(jlist);
          console.log(jlist.data);
          jlist.data.forEach((jid, i)  => {
            fetch('http://localhost:8081/final/job', {
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
    });
  }

  getData() {
    console.log("getting jobs............");

    axios.get('http://localhost:8081/final/filterinfo')
    .then(response =>{
      console.log(response.data);
      this.setState({role:response.data.role});
      this.setState({location:response.data.location});
      this.setState({company:response.data.company});
    });

    var datalist=[];
    axios.get('http://localhost:8081/final/jobs')
    .then(jlist=> {
      console.log(jlist.data.data);
      jlist.data.data.forEach((jid, i)  => {
        fetch('http://localhost:8081/final/job', {
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
        <Jobfilter location={this.state.location} company={this.state.company} role={this.state.role} updateData={this.updateData.bind(this)}></Jobfilter>
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
