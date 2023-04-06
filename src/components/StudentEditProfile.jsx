import React from "react";
import styles from "../css/AddJob.module.css";
import {
  Button
} from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const StudentEditProfile = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Hello", data);
  }
  return (
    <>
    <Navbar/>
    <div style={{display:"flex", height: "100vh"}}>
    <Sidebar/>
    <div className={styles.container}>
      <h2>Add a new Job</h2>
      <br />
      <form  onSubmit={handleSubmit}>
        <div className={styles.AddJob}>
          <label>Name </label>
          <input className={styles.Input}
            type="text"
            name="name"
            placeholder="Enter the name of the Student"
            required
          />
        </div>
        <div className={styles.AddJob}>
          <label>Branch </label>
          <input className={styles.Input}
            type="text"
            name="Branch"
            placeholder="Enter the name of the Branch"
            required
          />
          <br />
        </div>
        <div className={styles.AddJob}>
          <label className="title">Your Department</label>

          <span>
            <input className={styles.Input} type="radio" name="radiobtn" value="CSE" required/>
            <label className="short">CSE </label>

            <input className={styles.Input} type="radio" name="radiobtn" value="ECE" />
            <label className="short">ECE </label>

            <input className={styles.Input} type="radio" name="radiobtn" value="MnC" />
            <label className="short">MnC </label>

            <input className={styles.Input} type="radio" name="radiobtn" value="EE" />
            <label className="short">EE </label>

            <input className={styles.Input} type="radio" name="radiobtn" value="Mech" />
            <label className="short">Mech </label>

            <input className={styles.Input} type="radio" name="radiobtn" value="Civil" />
            <label className="short">Civil </label>

            <input className={styles.Input} type="radio" name="radiobtn" value="Petro" />
            <label className="short">Petro </label>

            <input className={styles.Input} type="radio" name="radiobtn" value="Mining" />
            <label className="short">Mining </label>
          </span>
        </div>
        <div className={styles.AddJob}>
          <label>CGPA </label>
          <input className={styles.Input}
            type="number"
            name="CGPA"
            placeholder="Latest Semester CGPA"
            required
          />
        </div>
        <div className={styles.AddJob}>
          <label>Resume Link </label>
          <input className={styles.Input}
            type="text"
            name="Resume"
            placeholder="Enter latest Resume link online/Drive Link"
            required
          />
        </div>
        <div className={styles.AddJob}>
          <label>Type </label>{" "}
          <select id="type" name="domains">
            <option value="IT">IT</option>
            <option value="Core">Core</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </div>
    </div>
    </>
  );
};

export default StudentEditProfile;
