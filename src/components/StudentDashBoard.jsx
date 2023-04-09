import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import StudentCard from "./StudentCard";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e7ebf0",
  padding: "4rem",
  margin: "2rem",
  textAlign: "center",
  justifyContent: "center",
}));

const StudentProfile = () => {
  let username = null;
  const [temparr, setTemparr] = useState([]);
  const [filterData, setFilterData] = useState([]);

  let dataArr = [];
  const getDocSnap = async () => {
    let fetbranch;
    let fetcgpa;
    let appliedFor = null;

    const docRef = doc(db, "student", username.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      fetbranch = docSnap.data().branch;
      
      fetcgpa = docSnap.data().cgpa;
      appliedFor = docSnap.data().appliedFor;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    setTemparr(appliedFor);
    console.log("applied for ", appliedFor, fetbranch, fetcgpa);

    const q = query(
      collection(db, "companies"),
      where(fetbranch, "==", fetbranch),
      where("minCGPA", "<=", fetcgpa)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let valu = doc.data();
      valu["jobid"] = doc.id;
      valu["studid"] = username.uid;
      let applied = false;
      if(appliedFor){
        applied = appliedFor.includes(doc.id);
      }
      valu["applied"] = applied;
      dataArr.push(valu);
      
    });
    // console.log("dataarr", dataArr);
    setFilterData(dataArr);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        username = user;
        getDocSnap();
      }
    });

  }, []);

  return (
    <Box height="100vh" width="100%" p={2}>
      {/* <ul>{myArr}</ul> */}
      <Typography variant="h2"> Student's Dashboard </Typography>
      <Grid container justifyContent>
          {filterData.length?(<Grid item xs={12} sm={6} md={3}  alignItems="center">
            <Item><Typography sx={{fontWeight:"bold"}}>Available Jobs</Typography>{filterData.length}</Item>
          </Grid>):<h2>Loading...</h2>}
          {temparr.length?(<Grid item xs={12} sm={6} md={3}  alignItems="center">
            <Item><Typography sx={{fontWeight:"bold"}}>Applied For</Typography>{temparr.length} Jobs</Item>
          </Grid>):<h2>Loading...</h2>}
        
      </Grid>
      <div
        style={{
          width: "90%",
          margin: "auto",
          backgroundColor: "#e7ebf0",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        {filterData.length ? 
          filterData.map((data)=>(
            <StudentCard
            companyName={data.companyName}
            salary={data.salary}
            domain={data.domain}
            imageURL={data.imageURL}
            jobid = {data.jobid}
            studentid = {data.studid}
            applied = {data.applied}
            position = {data.position}
          />
          ))
        : <h2>No Eligible Job Exists</h2>}
        {/* <StudentCard
          companyName="Google"
          salary="21 lpa"
          domain="IT"
          imageURL="https://picsum.photos/200"
        /> */}
  

        {/* </Box> */}
      </div>
    </Box>
  );
};

export default StudentProfile;
