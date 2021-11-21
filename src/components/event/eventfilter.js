import React, { Component, Button } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import "./eventfilter.css"
import Autocomplete from "@material-ui/lab/Autocomplete"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"

const useStyles = makeStyles({
  root: {
    width: 100,
    fontColor: "#E7E6E4",
    paddingLeft: "10px",
    color: "#E7E6E4",
  },
})

const marks = [
  { value: 0, label: "" },
  { value: 25, label: "" },
  { value: 50, label: "" },
  { value: 100, label: "" },
]

function valuetext(value) {
  return `${value}lpa`
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1
}

const Location = [{ location: "Bangalore" }, { location: "Chennai" }]
const Experience = [
  { exp: "0 years" },
  { exp: "1-5 years" },
  { exp: "5-10 years" },
  { exp: "10+ years" },
]
const Role = [{ job: "Software Engineer" }, { job: "System Engineer" }]
function Jobfilter() {
  const classes = useStyles()
    return (
      <div className="Sidebar">
        <div className="Text">Filter</div>
        <br />
        <div className="line1"></div>
        <div className="Text1">Location</div>
        <Autocomplete
          id="combo-box-demo"
          options={Location}
          getOptionLabel={option => option.location}
          style={{
            width: 200,
            paddingLeft: "10px",
            paddingTop: "10px",
            paddingBottom: "40px",
            height: 15,
            Color: "#E7E6E4",
            borderRadius: "10px",
          }}
          renderInput={params => (
            <TextField
              {...params}
              style={{ background: "#E7E6E4", borderRadius: "10px" }}
              label=""
              variant="outlined"
              Color="#E7E6E4"
            />
          )}
        />
        <div className="Text1">Experience</div>
        <Autocomplete
          id="combo-box-demo"
          options={Experience}
          getOptionLabel={option => option.exp}
          style={{
            width: 200,
            paddingLeft: "10px",
            paddingBottom: "40px",
            paddingTop: "10px",
            height: 20,
            Color: "#E7E6E4",
          }}
          renderInput={params => (
            <TextField
              {...params}
              style={{ background: "#E7E6E4", borderRadius: "10px" }}
              label=""
              variant="outlined"
              Color="#E7E6E4"
            />
          )}
        />
        <div className="Text1">Role</div>
        <Autocomplete
          id="combo-box-demo"
          options={Role}
          getOptionLabel={option => option.job}
          style={{
            width: 200,
            paddingLeft: "10px",
            paddingBottom: "40px",
            paddingTop: "10px",
            height: 20,
            Color: "#E7E6E4",
          }}
          renderInput={params => (
            <TextField
              {...params}
              style={{ background: "#E7E6E4", borderRadius: "10px" }}
              label=""
              variant="outlined"
              Color="#E7E6E4"
            />
          )}
        />
        <div className="Text1">Salary</div>
        <div className={classes.root}>
          <Slider
            defaultValue={30}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-restrict"
            style={{
              width: 180,
              color: "#E7E6E4",
              paddingLeft: "10px",
              fontColor: "#E7E6E4",
            }}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </div>
      </div>
    )
}
export default Jobfilter
