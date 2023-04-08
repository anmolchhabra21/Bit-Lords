import React, {useState, useEffect} from "react";
import styles from "./../css/AddJob.module.css";
import { Button } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { storage, auth, db } from "../firebase";
import { doc, addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");


  function handleChange(event) {
    setFile(event.target.files[0]);
  }


  let imgURL = null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userID = auth.currentUser.uid;
    const data = new FormData(e.currentTarget);
    console.log("Hello", data.get("CSE"), data.get("Mech"));

    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/logo/${userID}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // update progress
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {
          // imgURL = url;
          try {
            let user = auth.currentUser;
            const docRef = await addDoc(collection(db, "companies"), {
              compID: user.uid,
              companyName: data.get("name"),
              position: data.get("position"),
              salary: parseFloat(data.get("salary")),
              description: data.get("description"),
              domain: data.get("domains"),
              minCGPA: parseFloat(data.get("cgpa")),
              CSE: data.get("CSE"),
              ECE: data.get("ECE"),
              MnC: data.get("MnC"),
              EE: data.get("EE"),
              Mech: data.get("Mech"),
              Civil: data.get("Civil"),
              Petro: data.get("Petro"),
              Mining: data.get("Mining"),
              imageURL: url
            });
            console.log("Document written id");
            alert("Company details added!!")
            navigate('/company')
          
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        });
      }
    );

    // try {
    //   await setDoc(doc(db, "companies", userID), {
    //     companyName: data.get("name"),
    //     position: data.get("position"),
    //     salary: data.get("salary"),
    //     description: data.get("description"),
    //     domain: data.get("domains"),
    //     minCGPA: data.get("cgpa"),
    //     CSE: data.get("CSE"),
    //     ECE: data.get("ECE"),
    //     MnC: data.get("CSE"),
    //     EE: data.get("ECE"),
    //     Mech: data.get("CSE"),
    //     Civil: data.get("ECE"),
    //     Petro: data.get("CSE"),
    //     Mining: data.get("ECE"),
    //     imageURL: imgURL
    //     // name: "chumitya",
    //   }, {merge: true});
    //   console.log("Document written id");
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div className={styles.container}>
          <h2>Add a new Job</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <div className={styles.AddJob}>
              <label>Name </label>
              <input
                className={styles.Input}
                type="text"
                name="name"
                placeholder="Enter the name of the Company"
              />
            </div>
            <div className={styles.AddJob}>
              <label>Position </label>
              <input
                className={styles.Input}
                type="text"
                name="position"
                placeholder="Enter the name of the role offered"
              />
              <br />
            </div>
            <div className={styles.AddJob}>
              <label>Salary </label>
              <input
                className={styles.Input}
                type="number"
                name="salary"
                step="0.01"
                placeholder="Offered Salary in LPA"
              />
            </div>
            <div className={styles.AddJob}>
              <label>Description </label>
              <textarea
                className={styles.Input}
                id="w3review"
                name="description"
                rows="5"
                placeholder="Enter Job Description"
              ></textarea>
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
              <input
                className={styles.Input}
                type="number"
                name="cgpa"
                step="0.01"
                placeholder="Minimum CG Criteria"
              />
            </div>
            <div className={styles.AddJob}>
              <label className="title">Eligible Departments</label>

              <span>
                <input
                  className={styles.Input}
                  type="checkbox"
                  name="CSE"
                  value="CSE"
                />
                <label className="short">CSE </label>

                <input
                  className={styles.Input}
                  type="checkbox"
                  name="ECE"
                  value="ECE"
                />
                <label className="short">ECE </label>

                <input
                  className={styles.Input}
                  type="checkbox"
                  name="MnC"
                  value="MnC"
                />
                <label className="short">MnC </label>

                <input
                  className={styles.Input}
                  type="checkbox"
                  name="EE"
                  value="EE"
                />
                <label className="short">EE </label>

                <input
                  className={styles.Input}
                  type="checkbox"
                  name="Mech"
                  value="Mech"
                />
                <label className="short">Mech </label>

                <input
                  className={styles.Input}
                  type="checkbox"
                  name="Civil"
                  value="Civil"
                />
                <label className="short">Civil </label>

                <input
                  className={styles.Input}
                  type="checkbox"
                  name="Petro"
                  value="Petro"
                />
                <label className="short">Petro </label>

                <input
                  className={styles.Input}
                  type="checkbox"
                  name="Mining"
                  value="Mining"
                />
                <label className="short">Mining </label>
              </span>
            </div>
            <div className={styles.AddJob}>
              <label>Company Logo </label>
              <input
                className={styles.Input}
                type="file"
                id="logo"
                name="logo"
                onChange={handleChange}
                accept="/image/*"
              />
            </div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJob;
