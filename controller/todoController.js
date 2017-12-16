const bodyParser = require('body-parser');





var controller=function (app) {
var data=[{item:'the first thing i forgot'},{item:'another important thing i may forget'},{item:'i don\'t remember what i forgot'}];
  console.log('controller called');
  app.get("/",function(req,res){

      res.render('index',{'todo':data});

  });

  app.post("/addItem",function(req,res){
    console.log(req.body);
    data.push(req.body);
    console.log('post request made');

  });

  app.delete("/todo/:item",function(req,res){

    console.log("delete called");

  });


}


module.exports=controller;
