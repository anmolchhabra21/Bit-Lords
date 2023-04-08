import React, { useEffect, useState } from "react";
import CompanyLogo from "../../assets/Company_Logo/AMAZON_LOGO.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./JobDetails.css";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Company Object
const companyDetails = {
  companyName: "Amazon",
  roleOffered: "2023 Software Development Engineer Internship",
  CTC: 28,
  logo: CompanyLogo,
  companyDesc: {
    applicationDeadline: {
      lastDate: "8th April 2023",
    },
    locationsHiringFor: [
      "Bengaluru, India",
      "Hyderabad, India",
      "Mumbai, India",
      "Pune, India",
    ],
    rolesAndResponsibility: [
      "Participate in design and develop scalable and resilient systems in a timely manner using Java or Python and JavaScript to contribute to continual, iterative improvements for product teams.",
      "Design, write, comment and unit test code to confirm software modules are of the highest quality.",
      "Build Microservices that will run on the bank's internal cloud and the public cloud platform.",
      "Participate in scrum team stand-ups, code reviews and other ceremonies, contribute to task completion and blocker resolution within your team.",
      "Handle critical and time sensitive concurrent tasks with supervision and properly escalate situations as appropriate",
    ],
    basicQualifications: [
      "Currently enrolled in or will receive a Bachelor’s or Master’s Degree with a graduation date between September 2023 and December 2024.",
      // "A mininum of 7.00 CGPA aggregate upto last semester.",
      "Possess an extremely sound understanding of areas in the basic areas of Computer Science such as Algorithms, Data Structures, Object Oriented Design, Databases.",
      "Be able to write Amazon quality code in an object oriented language - preferably in C/C++/Java in a Linux environment.",
      "Candidate must have good written and oral communication skills, be a fast learner and have the ability to adapt quickly to a fast-paced development environment.",
    ],
    eligibleBranches: [
      "Computer Science And Engineering",
      "Mathematics And Computational Engineering",
      "Information Technology",
      "Electronics And Communication Engineering ",
      "Electrical Engineering",
    ],
    preferredQualifications: [
      "Strong, object-oriented design and coding skills (C/C++ and/or Java preferably on a UNIX or Linux platform)",
      "Knowledge of Perl or other scripting languages a plus",
      "Experience with distributed (multi-tiered) systems, algorithms, and relational databases",
      "Experience in optimization mathematics (linear programming, nonlinear optimization)",
      "Ability to effectively articulate technical challenges and solutions",
      "Deal well with ambiguous/undefined problems; ability to think abstractly",
      "Previous technical internship(s) preferred",
    ],
  },
};

const JobDetails = () => {
  const [compdata, setCompdata] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getCompData = async () => {
    const docRef = doc(db, "companies", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setCompdata(docSnap.data());
      console.log("compdata ", compdata);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getCompData();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="companyWrapper">
          <div className="companyHead">
            <div className="nameRole">
              <span>
                <img src={compdata.imageURL} alt="" />
              </span>
              <div className="companyHeadLeft">
                <div>{compdata.companyName}</div>
                <span>{compdata.position}</span>
                <h3 className="CTC">₹{compdata.salary} LPA</h3>
              </div>
            </div>

            <div className="companyHeadRight">
              <button className="applyBtn">Apply</button>
            </div>
          </div>

          <div className="deadLine">
            <ul>
              <li>
                <h4 className="applicationOpen">Application are open now!</h4>
              </li>
            </ul>
          </div>

          {/* <div className="jobLocations">
            <div className="jobLocationsHeading">
              <h2>Locations</h2>
            </div>
            <ul>
              {companyDetails.companyDesc.locationsHiringFor.map((location) => (
                <li>{location}</li>
              ))}
            </ul>
          </div> */}

          <div className="jobDesc">
            <div className="jobDescHeading">
              <h2>Job Description</h2>
            </div>

            <div className="desc">
              <h2>
                <FaAngleDoubleRight />
              </h2>
              <h3>Your Role And Responsibilities</h3>
            </div>
            <p>{compdata.description}</p>

            <div className="desc">
              <h2>
                <FaAngleDoubleRight />
              </h2>
              <h3>Basic Qualifications</h3>
            </div>
            <ul>
              <li>
                Following are the eligible branches for this role, However all
                branches are welcomed to apply.
              </li>
              <b>
                <ul>{compdata["CSE"]}</ul>
                <ul>{compdata["Civil"]}</ul>
                <ul>{compdata["ECE"]}</ul>
                <ul>{compdata["MnC"]}</ul>
                <ul>{compdata["EE"]}</ul>
                <ul>{compdata["Mech"]}</ul>
                <ul>{compdata["Mining"]}</ul>
                <ul>{compdata["Petro"]}</ul>
              <li>A mininum of <u>{compdata.minCGPA}</u> CGPA aggregate upto last semester.</li>
              </b>

              {companyDetails.companyDesc.basicQualifications.map((basicQ) => (
                <li>{basicQ}</li>
              ))}
            </ul>

            <div className="desc">
              <h2>
                <FaAngleDoubleRight />
              </h2>
              <h3>Preferred Qualifications</h3>
            </div>
            <ul>
              {companyDetails.companyDesc.preferredQualifications.map(
                (preferredQ) => (
                  <li>{preferredQ}</li>
                )
              )}
            </ul>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
