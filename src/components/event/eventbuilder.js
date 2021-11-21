import React from 'react'
import Eventfilter from "./eventfilter"
import Eventcard from "./eventcard"
import footer_logo from "../../assets/transparent-logo.png"
import SortIcon from '@material-ui/icons/Sort';
import Button from "@material-ui/core/Button"
import axios from 'axios';

class Eventbuilder extends React.Component {

  state= {
    data:null
  }

  constructor(props) {
    super(props);
    console.log("events............");
    this.getData();
  }

  getData() {
    console.log("getting events............");
    var datalist=[];
    axios.get('http://77a8-223-187-127-66.ngrok.io/final/events')
    .then(elist=> {
      console.log(elist.data.data);
      elist.data.data.forEach((eid, i)  => {
        fetch('http://77a8-223-187-127-66.ngrok.io/final/event', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: JSON.stringify({
            "eventid":eid
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
    /*axios.post('http://localhost:8081/final/event',JSON.stringify({"eventid":"e101"}),{headers:{Accept: 'application/json'}})
    .then(edata=>{
      //datalist.append(edata);
      console.log(edata);
    });*/
    
  }

  render() { 
    return(
      <div>
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
            justifyContent:"center",
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width:"75%",
              paddingTop: "2%",
              height:"1000px"
            }}
          >
            {
              (this.state.data==null)?
              <div className="loader" style={{alignSelf:"center"}}></div>:
              this.state.data.map((di)=>{
                return <div>
                  <Eventcard data={di}/>
                  <div style={{ height: "20px", width: "100%" }}></div>
                </div>
              })
            }
          </div>
        </div>
        <div style={{ height: "50px", width: "100%" }}></div>
      </div>
    );
  }
}
 
export default Eventbuilder;