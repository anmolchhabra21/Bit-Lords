import React from 'react'
import XLSX from 'xlsx'
import { saveAs } from 'file-saver';
import { Button } from '@mui/material';

const Test = (props) => {
    console.log("Test", props.data);

    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
// let data = [{
//     "Segment": "Government",
//     "Country": "Canada",
//     "Product": "Carretera",
//     "Discount": "None",
// },
// {
//     "Segment": "Government",
//     "Country": "Germany",
//     "Product": "Carretera",
//     "Discount": "None",
// },
// {
//     "Segment": "Midmarket",
//     "Country": "France",
//     "Product": "Carretera",
//     "Discount": "None",
// }];

let data = props.data.map((item) => (
    {   
        "NAME" : item.name,
        "BRANCH" : item.branch,
        "CGPA" : item.cgpa,
        "ADMISSION No" : item.rollNo,
        "RESUME LINK" : item.resumeLink
    }
))

console.log("final:)", data);

const handleClick= () => {

    

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = {
        Sheets: {
            'data': worksheet
        },
        SheetNames: ['data']
    };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array'});
    console.log(excelBuffer);
    saveAsExcel(excelBuffer, 'myFile');
}

function saveAsExcel(buffer, filename) {
    const data = new Blob([buffer], { type: EXCEL_TYPE});
    saveAs(data,filename+'_export_'+new Date().getTime()+EXCEL_EXTENSION)
}


  return (
    <div style={{ display:"flex", justifyContent:"center"}}>
        <Button  variant="outlined" onClick={handleClick}>Download</Button>
    </div>
        
  )
}

export default Test