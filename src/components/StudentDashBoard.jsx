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

  const [filterData, setFilterData] = useState([]);

  let dataArr = [];
  const getDocSnap = async () => {
    let fetbranch;
    let fetcgpa;

    const docRef = doc(db, "student", username.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      fetbranch = docSnap.data().branch;
      console.log("Document data:", fetbranch);
      fetcgpa = docSnap.data().cgpa;
      console.log("Document data:", fetcgpa);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    console.log(fetbranch, fetcgpa);

    const q = query(
      collection(db, "companies"),
      where(fetbranch, "==", fetbranch),
      where("minCGPA", "<=", fetcgpa)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // setFilterData(doc.data());
      // fetdata = doc.data();
      // console.log("doc ",doc.id);
      // doc.data().id = doc.id;
      let valu = doc.data();
      valu["compid"] = doc.id;
      valu["studid"] = username.uid;
      dataArr.push(valu);
      // console.log("supersh", valu)
      // dataArr.push(doc.id);
      // console.log(doc.data())
      
    });
    setFilterData(dataArr);
    // console.log("there", dataArr);
  };
  // setFilterData(dataArr);
  console.log(filterData);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // import { collection, query, where, getDocs } from "firebase/firestore";
        // import { doc, getDoc } from "firebase/firestore";
        // Data!
        username = user;
        // setMyArr(dataArr);
        getDocSnap();
        // console.log(myArr);
      }
    });

    // console.log(myArr);
    // setFilterData(fetdata);
    // console.log("hello ",filterData);
  }, []);

  return (
    <Box height="100vh" width="100%" p={2}>
      {/* <ul>{myArr}</ul> */}
      <Typography variant="h3"> Hi Bhai!! </Typography>
      <Grid container justifyContent>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} alignItems="center">
            <Item>xs=2</Item>
          </Grid>
        ))}
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
        {filterData ? 
          filterData.map((data)=>(
            <StudentCard
            companyName={data.companyName}
            salary={data.salary}
            domain={data.domain}
            imageURL={data.imageURL}
            companyid = {data.compid}
            studentid = {data.studid}
          />
          ))
        : <h2>No Eligible Company Exists</h2>}
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
