const express = require('express');
const controller = require('./controller/todoController.js');

var app=express();
app.set('view engine','ejs');
app.use(express.static('./resources'));
  controller(app);

//create server
app.listen(3000);


console.log("server running @ 3000");
