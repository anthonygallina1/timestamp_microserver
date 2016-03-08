//This is a working developer version. Remove morgan debug for a production version
//var morgan = require('morgan');
var path    = require("path");
var express = require('express'),
    app = express();
var moment = require("moment");
//This is a developer version. Remove morgan debug for a production version
//app.use(morgan('combined'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
  
//Get time
 var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
  app.get('/:time', function(req, res) {
    var unixVal = null;
    var natVal = null;
    if (moment(req.params.time, 'X', true).isValid()) {
        unixVal = parseInt(req.params.time);
        var date = new Date(unixVal * 1000);
        natVal = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    }
    else if(moment(req.params.time, "MMMM D, YYYY", true).isValid() || moment(req.params.time, "MMMM D YYYY", true).isValid() || moment(req.params.time, "YYYY MMMM D", true).isValid() ||
    moment(req.params.time, "MMM D, YYYY", true).isValid() || moment(req.params.time, "MMM D YYYY", true).isValid() || moment(req.params.time, "YYYY MMM D", true).isValid()){
        unixVal = Date.parse(req.params.time)/1000;
        date = new Date(unixVal * 1000);
        natVal = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    }
    res.json({ unix: unixVal, natural: natVal });
});
});

app.listen(process.env.PORT);
//This is a developer version. Remove console log for a production version
//console.log('Express server started on port %s', process.env.PORT);