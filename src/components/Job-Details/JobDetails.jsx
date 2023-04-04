import React from "react";
import CompanyLogo from "../../assets/Company_Logo/AMAZON_LOGO.jpg"
import { FaBriefcase, FaAngleDoubleRight } from "react-icons/fa";
import "./JobDetails.css"
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

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
      "A mininum of 7.00 CGPA aggregate upto last semester.",
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
  return (
    <>
    <Navbar/>
    <div style={{display:"flex"}}>
    <Sidebar/>
    <div className="companyWrapper">
      <div className="companyHead">
        <div className="nameRole">
          <span>
            <img src={companyDetails.logo} alt="" />
          </span>
          <div className="companyHeadLeft">
            <div>{companyDetails.roleOffered}</div>
            <span>{companyDetails.companyName}</span>
            <h3 className="CTC">₹{companyDetails.CTC} LPA</h3>
          </div>
        </div>

        <div className="companyHeadRight">
          <button className="applyBtn">Apply</button>
        </div>
      </div>

      <div className="deadLine">
        <div className="deadLineHeading">
          <h2>Application Deadline</h2>
        </div>
        <ul>
          <li>
            <h4 className="applicationOpen">Application are open now!</h4>
          </li>
          <li>
            <h4 className="lastDate">
              Last Date To Apply :{" "}
              {companyDetails.companyDesc.applicationDeadline.lastDate}
            </h4>
          </li>
          <li>
            <h4>
              We encourage you to apply as soon as possible beacause our team
              will shortlist the candidates on rolling basis.
            </h4>
          </li>
        </ul>
      </div>

      <div className="jobLocations">
        <div className="jobLocationsHeading">
          <h2>Locations</h2>
        </div>
        <ul>
          {companyDetails.companyDesc.locationsHiringFor.map((location) => (
            <li>{location}</li>
          ))}
        </ul>
      </div>

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
        <ul>
          {companyDetails.companyDesc.rolesAndResponsibility.map(
            (responsibility) => (
              <li>{responsibility}</li>
            )
            )}
        </ul>

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
            <ul>
              {companyDetails.companyDesc.eligibleBranches.map((branch) => (
                <li>{branch}</li>
                ))}
            </ul>
          </li>

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
      </div>

    </div>
    </div>
    </>
  );
};

export default JobDetails;
