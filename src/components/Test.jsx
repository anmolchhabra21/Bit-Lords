import React from 'react'
import XLSX from 'xlsx'
import { saveAs } from 'file-saver';

const Test = () => {

    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
const data = [{
    "Segment": "Government",
    "Country": "Canada",
    "Product": "Carretera",
    "Discount": "None",
},
{
    "Segment": "Government",
    "Country": "Germany",
    "Product": "Carretera",
    "Discount": "None",
},
{
    "Segment": "Midmarket",
    "Country": "France",
    "Product": "Carretera",
    "Discount": "None",
}];

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
    <div onClick={handleClick}>Test</div>
  )
}

export default Test