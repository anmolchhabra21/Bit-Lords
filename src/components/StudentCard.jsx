import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

const StudentCard = (props) => {
  const [applied, setApplied] = useState(false);
  
  useEffect(() => {

  setApplied(props.applied)

  }, [])
  

  const apply = async() => {
      const docRef = doc(db, "companies", props.companyid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let arr = [];
        if(docSnap.data().studentsApplied){
          arr = docSnap.data().studentsApplied;         
        }
        arr.push(props.studentid);
        setDoc(docRef, { studentsApplied : arr }, { merge: true });

      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }


      const studRef = doc(db, "student", props.studentid);
      const sdocSnap = await getDoc(studRef);
      if (sdocSnap.exists()) {
        let arr1 = [];
        if(sdocSnap.data().appliedFor){
          arr1 = sdocSnap.data().appliedFor;         
        }
        arr1.push(props.companyid);
        setDoc(studRef, { appliedFor : arr1 }, { merge: true });

      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      setApplied(true);
  }


  console.log("props", props)
  return (
    <AppBar sx={{borderRadius:"10px", margin:"1.5rem 0", color:"black", backgroundColor:"white"}} position="static">
        <Toolbar >
        <Avatar alt="Remy Sharp" src={props.imageURL} />
          <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.companyName}
            <Typography>Domain : {props.domain} | CTC : {props.salary}</Typography>
          </Typography>
          {applied ? <span style={{color:"green"}}><CheckCircleIcon/> Applied</span>
          : <Button color="inherit" onClick={apply}>Apply</Button>
          }
        </Toolbar>
      </AppBar>
  )
}

export default StudentCard