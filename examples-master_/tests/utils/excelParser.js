const puppeteer = require ('puppeteer')
var xlsx=require("xlsx");
var workbook=xlsx.readFile("data/Config.xlsx");
var NumofRows,excelRowscount,uid,pd;
let sheet;
class excelRows{
     readexceldata()
    {
        sheet=workbook.Sheets[workbook.SheetNames[0]];
        excelRowscount = xlsx.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
        NumofRows=excelRowscount.length;
        for(let i=1;i<NumofRows;i++)
        {
          uid=sheet[`B${i+1}`].v;
          pd=sheet[`B${i+2}`].v;
        }
    }
    getdata()
    {
      return {uid,pd}
    }
    
}
module.exports=excelRows;

