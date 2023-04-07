import React from "react";
import aman from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={aman.container}>
      <div className={aman.notificationWrapper}>
        <form className={aman.formWrapper} action="#">
          <h2 className="heading">Notify Placement Cell</h2>

          
            <input
              className={aman.input}
              type="text"
              placeholder="Company Name"
            />
            <input
              className={aman.input}
              type="text"
              placeholder="Job Role"
            />
          <textarea className={aman.input} name="" id="" cols="30" rows="5">
            Enter the decscription about the hiring...
          </textarea>
          <button className="sendButton">Send Notification</button>
        </form>
      </div>
    </div>
  );
};

export default Notification;
