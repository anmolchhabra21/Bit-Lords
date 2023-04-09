import React, { useEffect, useState } from 'react';
import subham from './Table.module.css';
import {FaFileDownload} from 'react-icons/fa'
import { auth, db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { doc, getDoc} from "firebase/firestore"; 
import Navbar from '../Navbar';
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>

const data = [
  { name: "Anmol", branch: "EE", cgpa: 8, admission: "21je0768", email: "anmol@123" , Resume: <FaFileDownload/> },
  { name: "Subham", branch: "MnC", cgpa: 8, admission: "21je0768", email: "anmol@123" , Resume: <FaFileDownload/> },
  { name: "Supesh", branch: "ECE", cgpa: 8, admission: "21je0768", email: "anmol@123", Resume: <FaFileDownload/> },
  { name: "Aman", branch: "Petro", cgpa: 8, admission: "21je0768", email: "anmol@123", Resume: <FaFileDownload/> },
  { name: "Aman Pro", branch: "Petro", cgpa: 8, admission: "21je0768", email: "anmol@123" , Resume: <FaFileDownload/>},
  { name: "Ultra Pro", branch: "Petro", cgpa: 8, admission: "21je0768", email: "anmol@123", Resume: <FaFileDownload/> },
]

function Table() {
  let [compdata, setCompData] = useState([]);
  let [comNamedata, setComNameData] = useState([]);

  useEffect(()=>{

    auth.onAuthStateChanged(async(user)=>{
      if(user){
        // console.log(user.uid);
        const compRef = collection(db, "companies");
        const q = query(compRef, where("compID", "==", user.uid));
        
        const querySnapshot = await getDocs(q);
        // console.log("query ", querySnapshot);
        const arr = [];
        let finalarr = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data()["studentsApplied"];
          console.log("anmol", doc.data());
          // data["docid"] = doc.id;
          let ans = [];
          ans["position"] = doc.data()["position"]
          ans["companyName"] = doc.data()["companyName"]
          ans["minCGPA"] = doc.data()["minCGPA"]
          arr.push(data);
          finalarr.push(ans);
          // doc.data() is never undefined for query doc snapshots
        });
        setComNameData(finalarr);
        console.log("doc", finalarr);
        let pararr = [];
        for(let i=0; i<arr.length; i++){
          let detarr = [];
          for(let j=0; j<arr[i].length; j++){
            const ref = doc(db, "student", arr[i][j]);
            const docSnap = await getDoc(ref);
            if (docSnap.exists()) {
              // Use a City instance method
              // console.log("Done ",docSnap.data());
              detarr.push(docSnap.data());
            } else {
              console.log("No such document!");
            }
          }
          pararr.push(detarr);
        }
        setCompData(pararr);
        console.log("perarr ", pararr);
      }
    })
  },[])
  let coun = 0;
  return (
    <>
    <Navbar/>
    <div className="App">
      {compdata?
      compdata.map((firstd, index)=>(
        <>
        <h2 className='head'>{comNamedata[coun]["companyName"]}{"  "}{comNamedata[coun]["position"]}</h2>
      <table key={index} className="subham.ceter" >
        <thead>
          <tr>
          <th>NAME</th>
          <th>BRANCH</th>
          <th>CGPA</th>
          <th>ADMISSON NO</th>
          <th>Resume Link</th>
          </tr>
        </thead>
        <tbody>
          {
            firstd.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.branch}</td>
                  <td>{value.cgpa}</td>
                  <td>{value.rollNo}</td>
                  <td>{value.resumeLink}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <br/>
      <br/>
      {coun++?null:null}
      </>
      ))
       : <h1>No data to show till now...</h1>}
    </div>
  </>
  );
}

export default Table;
