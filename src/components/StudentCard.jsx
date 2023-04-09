import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

const StudentCard = (props) => {
  const [applied, setApplied] = useState(false);
  
  useEffect(() => {

  setApplied(props.applied)

  }, [])
  

  const apply = async() => {
      const docRef = doc(db, "companies", props.jobid);
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
        arr1.push(props.jobid);
        setDoc(studRef, { appliedFor : arr1 }, { merge: true });

      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      setApplied(true);
  }


  console.log("props", props)
  return (
    <AppBar className='studentJobCard' sx={{borderRadius:"10px", margin:"1.5rem 0", color:"black", backgroundColor:"white"}} position="static">
        <Toolbar >
        <Avatar alt="Remy Sharp" src={props.imageURL} />
          <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={`/organization/${props.jobid}`} className="pet">{props.companyName}</Link>
            <Typography>Domain : {props.domain} | CTC : {props.salary} | Job Profile : {props.position}</Typography>
          </Typography>
          {applied ? <span style={{color:"green"}}><CheckCircleIcon/> Applied</span>
          : <Button color="inherit" onClick={apply}>Apply</Button>
          }
        </Toolbar>
      </AppBar>
  )
}

export default StudentCard