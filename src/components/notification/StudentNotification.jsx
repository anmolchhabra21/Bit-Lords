import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { auth, db } from '../../firebase';
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from 'react';

export default function StudentNotification() {

  const[fetchdat, setFetchdat] = useState([]);

  useEffect(()=>{
    auth.onAuthStateChanged(function(user){
      if(user){
  
        const fetching = async() =>{
          const docRef = doc(db, "student", user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setFetchdat(docSnap.data().messageCompany);
            console.log("Document data:", docSnap.data().messageCompany);
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        } 
        fetching();
      }
    })
  },[])


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      
      <Navbar />
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Container sx={{mt:2, p:2, backgroundColor:"#e7ebf0", borderRadius:"8px"}}>
      <Typography sx={{m:3}} variant='h4'>Notifications</Typography>
      {fetchdat?
      fetchdat.map((sing, index)=>(
        <Accordion key={index} expanded={expanded === sing} onChange={handleChange(sing)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {sing.msgcomp}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{sing.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {sing.desc}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))
        :<h1>No notifications are here </h1>}
      
      {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      
      
      </Container>
      </div>
    </div>
  );
}