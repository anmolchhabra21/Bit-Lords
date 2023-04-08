import React, { useState, useEffect } from "react";
import aman from "./Notification.module.css";
import { doc, getDoc, setDoc, collection, query, where, getDocs  } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Notification = () => {
  let usernames = null;
  let fetchcompname = "";
  let fdata = {};
  let [ compData, setCompData ] = useState([]);
  let [ value , setValue ] = useState("");

  //Fetch Company Job Profile
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const compRef = collection(db, "companies");
        const q = query(compRef, where("compID", "==", user.uid));
  
        const querySnapshot = await getDocs(q);
        const arr = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          console.log("doc", doc);
          data["docid"] = doc.id;
          arr.push(data);
          // doc.data() is never undefined for query doc snapshots
        });
        setCompData(arr);
      }
    });
    console.log("compdata", compData);
    
    
  }, [])
  


  const studentnot = async () => {
    console.log("usernames ", usernames);
    for (let i = 0; i < usernames.length; i++) {
      const docRef = doc(db, "student", usernames[i]);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data2:", docSnap.data());
        let arr = [];
        if (docSnap.data().messageCompany) {
          arr = docSnap.data().messageCompany;
        }
        fdata.msgcomp = fetchcompname;
        arr.push(fdata);
        console.log("fdata is", fdata);
        setDoc(docRef, { messageCompany: arr }, { merge: true });
        console.log("added");
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document2!");
      }
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // setFdata({"desc": data.get("textarea"), "title": data.get("title")});
    fdata = { desc: data.get("textarea"), title: data.get("title") };

    console.log("data ", data.get("textarea"));
    
    // console.log("user", user.);

    const docRef = doc(db, "companies", data.get("profile"));
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
    
    alert("Message successfully sent to eligible students!!");
  };

  return (
    <div className={aman.formWrapper}>
      <form className={aman.form} onSubmit={handleClick}>
        <h2 className={aman.heading}>Notify Placement Cell</h2>
        <label>Job Profile </label>
              {compData.length ?
                <select id="type" name="profile" >
                  
                  {compData.map((singlearr,index)=>(
                  <option key={index} value={singlearr.docid}>{singlearr.position}</option>
                ))}
              </select>
              :
              <h3>plese Create a Job First</h3>
              }
                {/* {compData.length ? 
                compData.map((singlearr)=>(
                  <option value={compData.docid}>{singlearr.position}</option>
                ))
                :
                <option value="None">No Jobs Created</option>
                }
                 */}
                {/* <option value="Core">Core</option>
                <option value="Finance">Finance</option> */}
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
