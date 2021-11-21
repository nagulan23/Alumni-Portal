import React, { Component, Button ,useState,useEffect } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import "./Jobfilter.css"
import Autocomplete from "@material-ui/lab/Autocomplete"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import LoopIcon from '@material-ui/icons/Loop';
import { IconButton } from '@material-ui/core';
import axios from 'axios';


/*
const useStyles = makeStyles({
  root: {
    width: 100,
    fontColor: "#E7E6E4",
    paddingLeft: "10px",
    color: "#E7E6E4",
  },
})

const Location = [{ location: "Bangalore" }, { location: "Chennai" }]
const Experience = [
  { exp: "0 years" },
  { exp: "1-5 years" },
  { exp: "5-10 years" },
  { exp: "10+ years" },
]
const Role = [{ job: "Software Engineer" }, { job: "System Engineer" }]
*/
class Jobfilter extends React.Component {

  state={
    selected_location:"",
    selected_company:"",
    selected_role:"",
  }

  changelocation(event, value) {
    console.log(value);
    if(value!=null)
    this.setState({selected_location:value});
    else
    this.setState({selected_location:""});
  }

  changecompany(event, value) {
    console.log(value);
    if(value!=null)
    this.setState({selected_company:value});
    else
    this.setState({selected_company:""});
  }

  changerole(event, value) {
    console.log(value);
    if(value!=null)
    this.setState({selected_role:value});
    else
    this.setState({selected_role:""});
  }

  render() { 
    return <div className="jSidebar">
      <div style={{display:"flex",alignItems:"center"}}>
        <div className="Text">Filter</div>
          <IconButton >
              <LoopIcon style={{color:"white"}} onClick={()=>this.props.updateData({"location":this.state.selected_location,"name":this.state.selected_company,"role":this.state.selected_role})}/>
          </IconButton>
      </div>
    <div className="jline1"></div>
    <div className="Text1">Location</div>
    <Autocomplete
      id="combo-box-demo"
      options={this.props.location}
      onChange={this.changelocation.bind(this)}
      value={this.state.selected_location}
      style={{
        paddingLeft: "10px",
        paddingTop: "10px",
        paddingBottom: "40px",
        height: "15px",
        Color: "#E7E6E4",
        borderRadius: "10px",
      }}
      renderInput={params => (
        <TextField
          {...params}
          style={{ background: "white", borderRadius: "10px" }}
          label=""
          variant="outlined"
          Color="#E7E6E4"
        />
      )}
    />
    <div className="Text1">Company</div>
    <Autocomplete
      id="combo-box-demo"
      options={this.props.company}
      onChange={this.changecompany.bind(this)}
      value={this.state.selected_company}
      style={{
        paddingLeft: "10px",
        paddingBottom: "40px",
        paddingTop: "10px",
        height: 20,
        Color: "#E7E6E4",
      }}
      renderInput={params => (
        <TextField
          {...params}
          style={{ background: "white", borderRadius: "10px" }}
          label=""
          variant="outlined"
          Color="#E7E6E4"
        />
      )}
    />
    <div className="Text1">Role</div>
    <Autocomplete
      id="combo-box-demo"
      options={this.props.role}
      onChange={this.changerole.bind(this)}
      value={this.state.selected_role}
      style={{
        paddingLeft: "10px",
        paddingBottom: "40px",
        paddingTop: "10px",
        height: 20,
        Color: "#E7E6E4",
      }}
      renderInput={params => (
        <TextField
          {...params}
          style={{ background: "white", borderRadius: "10px" }}
          label=""
          variant="outlined"
          Color="#E7E6E4"
        />
      )}
    />
  </div>;
  }
}
 
export default Jobfilter;
