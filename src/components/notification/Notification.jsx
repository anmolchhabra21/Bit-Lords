import React, { useState } from "react";
import aman from "./Notification.module.css";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Notification = () => {
  let usernames = null;
  let fetchcompname = "";
  let fdata = {};

  const studentnot = async() =>{
    console.log("usernames ", usernames);
    for(let i=0; i<usernames.length; i++){
      const docRef = doc(db, "student", usernames[i]);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data2:", docSnap.data());
          let arr = [];
          if(docSnap.data().messageCompany){
            arr = docSnap.data().messageCompany;         
          }
          fdata.msgcomp =  fetchcompname;
          arr.push(fdata);
          console.log("fdata is",fdata);
          setDoc(docRef, { messageCompany : arr }, { merge: true });
          console.log("added")
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document2!");
        }
      }
      
    }
    const handleClick = async (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      // setFdata({"desc": data.get("textarea"), "title": data.get("title")});
      fdata = {"desc": data.get("textarea"), "title": data.get("title")};
      
      console.log("data ", data.get("textarea"));
      
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          // console.log("user", user.);
          const docRef = doc(db, "companies", user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data().studentsApplied);
            fetchcompname = docSnap.data().companyName;
            console.log("companyName", fetchcompname);
            usernames = docSnap.data().studentsApplied;
            await studentnot();
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    });
    alert("Message successfully sent to eligible students!!");
  };

  return (
    <div className={aman.formWrapper}>
      <form className={aman.form} onSubmit={handleClick}>
        <h2 className={aman.heading}>Notify Placement Cell</h2>

        <input
          className={aman.input}
          name="title"
          type="text"
          placeholder="Title"
        />
        <textarea
          name="textarea"
          style={{ resize: "none" }}
          className={aman.input}
          cols="30"
          rows="10"
          placeholder="Enter the decscription about the hiring..."
        ></textarea>
        <button className={aman.sendButton} type="submit">
          Send Notification
        </button>
      </form>
    </div>
  );
};

export default Notification;
