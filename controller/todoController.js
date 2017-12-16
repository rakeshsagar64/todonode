var controller=function (app) {

  console.log('controller called');
  app.get("/",function(req,res){
      res.render('index');

  });

  app.post("/addItem",function(req,res){
    console.log('post request made');

  });

}


module.exports=controller;
