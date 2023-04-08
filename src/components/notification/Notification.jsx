import React from "react";
import aman from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={aman.formWrapper}>
      <form className={aman.form} action="#">
        <h2 className={aman.heading}>Notify Placement Cell</h2>

        <input className={aman.input} type="text" placeholder="Company Name" />
        <input className={aman.input} type="text" placeholder="Job Role" />
        <textarea
        style={{resize:'none'}}
          className={aman.input}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter the decscription about the hiring..."
        ></textarea>
        <button className={aman.sendButton}>Send Notification</button>
      </form>
    </div>
  );
};

export default Notification;
