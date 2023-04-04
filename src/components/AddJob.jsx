import React from "react";
import "./../css/AddJob.css";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const AddJob = () => {
  return (
    <div className="container">
      <h2>Add a new Job</h2>
      <br />
      <form>
        <div>
          <label>Name </label>
          <input
            type="text"
            name="name"
            placeholder="Enter the name of the Company"
          />
        </div>
        <div>
          <label>Position </label>
          <input
            type="text"
            name="position"
            placeholder="Enter the name of the role offered"
          />
          <br />
        </div>
        <div>
          <label>Salary </label>
          <input
            type="number"
            name="salary"
            placeholder="Offered Salary in LPA"
          />
        </div>
        <div>
          <label>Description </label>
          <input type="text" name="des" placeholder="Enter Job Description" />
        </div>
        <div>
          <label>Type </label>{" "}
          <select id="type" name="domains">
            <option value="IT">IT</option>
            <option value="Core">Core</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div>
          <label>Minimum CGPA </label>
          <input type="number" name="cgpa" placeholder="Minimum CG Criteria" />
        </div>
        <div>
          <label className="title">Eligible Departments</label>

          <span>
            <input type="checkbox" value="CSE" />
            <label className="short">CSE </label>

            <input type="checkbox" value="ECE" />
            <label className="short">ECE </label>

            <input type="checkbox" value="MnC" />
            <label className="short">MnC </label>

            <input type="checkbox" value="EE" />
            <label className="short">EE </label>

            <input type="checkbox" value="Mech" />
            <label className="short">Mech </label>

            <input type="checkbox" value="Civil" />
            <label className="short">Civil </label>

            <input type="checkbox" value="Petro" />
            <label className="short">Petro </label>

            <input type="checkbox" value="Mining" />
            <label className="short">Mining </label>
          </span>
        </div>
        <div>
          <label>Company Logo </label>
          <input type="file" id="logo" name="logo" />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
