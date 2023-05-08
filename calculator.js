const expressVar = require("express");
const app = expressVar();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function (req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res) { 
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let ans = num1 + num2;
  res.send("the result of calcualtion is : " + ans);
});


// app.get("/contact", function (req, res) {
//   res.send("mobile number 📵");
// });


app.listen("3000",function(){console.log("server started on port 3000")});