import React from 'react';
import subham from './Table.module.css';
import {FaFileDownload} from 'react-icons/fa'
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>

const data = [
  { name: "Anmol", branch: "EE", cgpa: 8, admission: "21je0768", email: "anmol@123" , Resume: <FaFileDownload/> },
  { name: "Subham", branch: "MnC", cgpa: 8, admission: "21je0768", email: "anmol@123" , Resume: <FaFileDownload/> },
  { name: "Supesh", branch: "ECE", cgpa: 8, admission: "21je0768", email: "anmol@123", Resume: <FaFileDownload/> },
  { name: "Aman", branch: "Petro", cgpa: 8, admission: "21je0768", email: "anmol@123", Resume: <FaFileDownload/> },
  { name: "Aman Pro", branch: "Petro", cgpa: 8, admission: "21je0768", email: "anmol@123" , Resume: <FaFileDownload/>},
  { name: "Ultra Pro", branch: "Petro", cgpa: 8, admission: "21je0768", email: "anmol@123", Resume: <FaFileDownload/> },
]

function Table() {
  return (
    <div className="App">
      <h1 className='head'>DATA TABLE</h1>
      <table className="subham.ceter">
        <thead>
          <tr>
          <th>NAME</th>
          <th>BRANCH</th>
          <th>CGPA</th>
          <th>ADMISSON NO</th>
          <th>E-mail</th>
          <th>Resume Link</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.branch}</td>
                  <td>{value.cgpa}</td>
                  <td>{value.admission}</td>
                  <td>{value.email}</td>
                  <td>{value.Resume}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
