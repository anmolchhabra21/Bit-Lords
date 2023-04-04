import React from "react";
import styles from "./../css/AddJob.module.css";
import {
  Button
} from "@mui/material";

const AddJob = () => {
  return (
    <div className={styles.container}>
      <h2>Add a new Job</h2>
      <br />
      <form>
        <div className={styles.AddJob}>
          <label>Name </label>
          <input className={styles.Input}
            type="text"
            name="name"
            placeholder="Enter the name of the Company"
          />
        </div>
        <div className={styles.AddJob}>
          <label>Position </label>
          <input className={styles.Input}
            type="text"
            name="position"
            placeholder="Enter the name of the role offered"
          />
          <br />
        </div>
        <div className={styles.AddJob}>
          <label>Salary </label>
          <input className={styles.Input}
            type="number"
            name="salary"
            placeholder="Offered Salary in LPA"
          />
        </div>
        <div className={styles.AddJob}>
          <label>Description </label>
          <textarea className={styles.Input} id="w3review" name="desciption" rows="5" placeholder="Enter Job Description"></textarea>
        </div>
        <div className={styles.AddJob}>
          <label>Type </label>{" "}
          <select id="type" name="domains">
            <option value="IT">IT</option>
            <option value="Core">Core</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div className={styles.AddJob}>
          <label>Minimum CGPA </label>
          <input className={styles.Input} type="number" name="cgpa" placeholder="Minimum CG Criteria" />
        </div>
        <div className={styles.AddJob}>
          <label className="title">Eligible Departments</label>

          <span>
            <input className={styles.Input} type="checkbox" value="CSE" />
            <label className="short">CSE </label>

            <input className={styles.Input} type="checkbox" value="ECE" />
            <label className="short">ECE </label>

            <input className={styles.Input} type="checkbox" value="MnC" />
            <label className="short">MnC </label>

            <input className={styles.Input} type="checkbox" value="EE" />
            <label className="short">EE </label>

            <input className={styles.Input} type="checkbox" value="Mech" />
            <label className="short">Mech </label>

            <input className={styles.Input} type="checkbox" value="Civil" />
            <label className="short">Civil </label>

            <input className={styles.Input} type="checkbox" value="Petro" />
            <label className="short">Petro </label>

            <input className={styles.Input} type="checkbox" value="Mining" />
            <label className="short">Mining </label>
          </span>
        </div>
        <div className={styles.AddJob}>
          <label>Company Logo </label>
          <input className={styles.Input} type="file" id="logo" name="logo" />
        </div>
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
};

export default AddJob;
