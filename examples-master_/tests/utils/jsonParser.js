//const puppeteer = require ('puppeteer')
var fs,json,jsonuid,jsonpwd,firstname,lastname,postalcode
let fields
class JsonParse
{
    readjsondata()
    {
        fs = require('fs');
        json=JSON.parse(fs.readFileSync('../data/data.json','utf8'));
        
        firstname = json.firstname;
        lastname = json.lastname;
        postalcode = json.postalcode;

       
    }
    getjsondata()
    {
        return{jsonuid,jsonpwd,firstname,lastname,postalcode}
    }
}
module.exports=JsonParse;