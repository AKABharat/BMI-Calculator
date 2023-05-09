const expressVar = require("express")
const app = expressVar();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  let height = parseFloat(req.body.height)
  let weight = parseFloat(req.body.weight)
  let ans = weight/(height**2)
  res.send("Your BMI is : "+ans.toFixed(2))
});


app.listen("3000", function () { console.log("server started on port 3000")});