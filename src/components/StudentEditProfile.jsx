import React, { useEffect, useState } from "react";
import styles from "../css/AddJob.module.css";
import { Button } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";
import '../css/Hero.css'

const StudentEditProfile = () => {
  const [newu, setNewu] = useState(null);
  const [selectval, setSelectval] = useState("IT");
  const [uname, setuName] = useState("");
  const [uroll, setuRoll] = useState("");
  const [ucgpa, setuCgpa] = useState("");
  const [uresm, setuResm] = useState("");

  // const getUser = async() => {

  //   console.log("hihi",user.uid);
  // }

  // auth.onAuthStateChanged(function(user){
  //   if(user){
  //     const userID = user.uid;
  //   }
  //   else{

  //   }
  // })
  // console.log("here",userID);

  // var promise = new Promise((resolve, reject)=>{

  // })
  // promise.then((user)=>{
  //   console.log("then is here", user.uid);
  // }).catch(()=>{
  //   console.log("catched the rejected");
  // })

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setNewu(user.uid);
        const unsub = onSnapshot(doc(db, "student", user.uid), (doc) => {
          if (doc.data()) {
            console.log(doc.data());
            setuName(doc.data().name);
            setuCgpa(doc.data().cgpa);
            setuResm(doc.data().resumeLink);
            setuRoll(doc.data().rollNo);
            setSelectval(doc.data().type);
          } else {
            console.log("Nothing to show!! please enter your details");
          }
          // set
          console.log("reloading");
          // console.log("Current data: ", doc.data());
        });
      }
    });
  }, []);

  const handleSelectChange = (e) => {
    setSelectval(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Hello", data.get("domains"));
    try {
      await setDoc(
        doc(db, "student", newu),
        {
          name: data.get("name"),
          rollNo: data.get("rollNo"),
          cgpa: parseFloat(data.get("CGPA")),
          resumeLink: data.get("Resume"),
          branch: data.get("domains"),
        },
        { merge: true }
      );
      console.log("Document written id");
      alert("Profile has been updated!!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div className='studentEditFormWrapper' style={{
          width: '50%',
        }}>
          <h2 style={{
            marginBottom: '0px',
          }} className="preventTextSelection">Student Profile</h2>
          <br />
          <form className="studentEditForm" onSubmit={handleSubmit}>
            <div className={styles.AddJob}>
              <label><b>Name</b> </label>
              <input
                className={styles.Input}
                type="text"
                name="name"
                value={uname}
                onChange={(e) => setuName(e.target.value)}
                placeholder="Enter the name of the Student"
                required
              />
            </div>
            <div className={styles.AddJob}>
              <label><b>Roll No</b> </label>
              <input
                className={styles.Input}
                type="text"
                name="rollNo"
                value={uroll}
                onChange={(e) => setuRoll(e.target.value)}
                placeholder="Enter your university Roll no. Here"
                required
              />
              <br />
            </div>
            {/* <div className={styles.AddJob}>
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
        </div> */}
            <div className={styles.AddJob}>
              <label><b>CGPA</b> </label>
              <input
                className={styles.Input}
                type="number"
                name="CGPA"
                step="0.01"
                value={ucgpa}
                onChange={(e) => setuCgpa(e.target.value)}
                placeholder="Latest Semester CGPA"
                required
              />
            </div>
            <div className={styles.AddJob}>
              <label><b>Resume Link</b> </label>
              <input
                className={styles.Input}
                type="text"
                name="Resume"
                value={uresm}
                onChange={(e) => setuResm(e.target.value)}
                placeholder="Enter latest Resume link online/Drive Link"
                required
                // onChange={(e)=>setuResm(e.target.value)}
              />
            </div>
            <div className={styles.AddJob}>
              <label><b>Select Department</b> </label>{" "}
              <select
                id="type"
                value={selectval}
                onChange={handleSelectChange}
                name="domains"
              >
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MnC">MnC</option>
                <option value="EE">EE</option>
                <option value="Mech">Mech</option>
                <option value="Civil">Civil</option>
                <option value="Petro">Petro</option>
                <option value="Mining">Mining</option>
                {/* {console.log('rerendering', selectval)} */}
              </select>
            </div>
            <Button style={{
              marginTop: '20px',
            }} variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentEditProfile;
