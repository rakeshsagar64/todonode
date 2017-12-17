const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//three steps to connect to moongodb
//step 1:- create a connection
mongoose.connect("mongodb://test:test@ds163053.mlab.com:63053/todo");
//step 2:-design a schema
var schema = new mongoose.Schema({
  item:String

});
//step 3:-create a model
var Model=mongoose.model('ModelName',schema);


var controller=function (app) {
var data=[{item:'the first thing i forgot'},{item:'another important thing i may forget'},{item:'i don\'t remember what i forgot'}];
  console.log('controller called');
  app.get("/",function(req,res){
//step 4:-perform the required operations
    //step 4.0:-select operations
      Model.find();
      res.render('index',{'todo':data});

  });

  app.post("/addItem",function(req,res){
    //step 4.1:-insert operations
    Model({item:req.body}).save();

    //console.log(req.body);
    //data.push(req.body);


    console.log(req.body +" was saved");

  });

  app.delete("/todo/:item",function(req,res){
    Model.find({item:req.params.item.replace(/\-/g," ")}).remove();
    console.log("deleted entry "+req.params.item);

  });


}


module.exports=controller;
