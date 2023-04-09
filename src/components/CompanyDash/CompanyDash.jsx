import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import './CompanyDash.css';
import CompanyAuthSecurity from "../Company/CompanyAuthSecurity";

const CompanyDash = () => {
    const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <h2 className="cd-head">Welcome! Thanks for collaborating with us for your upcoming Placement Drive.</h2>
    <div className="cd-container">
      <Card sx={{ maxWidth: 345 }} className="cd-card">
        <CardActionArea onClick={()=>{navigate('/company/newjob')}}>
          <CardMedia
            component="img"
            height="140"
            image="https://resources.workable.com/wp-content/uploads/2018/02/ru-jobs-tab-featured.png"
            alt="add-job"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Add Job
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fill the Job Notification Form (JNF/INF) Online.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }} className="cd-card">
        <CardActionArea onClick={()=>{navigate('/company/table')}}>
          <CardMedia
            component="img"
            height="140"
            image="https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Excel-Symbol.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Download Excel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Download the compiled excel sheet containing details and resume
               of interested students eligible for the position.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }} className="cd-card">
        <CardActionArea onClick={()=>{navigate('/company/notification')}}>
          <CardMedia
            component="img"
            height="140"
            image="https://images.idgesg.net/images/article/2019/01/android-q-notification-inbox-100785464-large.jpg?auto=webp&quality=85,70"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Send Notification
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Send Notification or Important update to all the students registered
               for your recruitment drive. 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    </>
  );
};

export default CompanyDash;
