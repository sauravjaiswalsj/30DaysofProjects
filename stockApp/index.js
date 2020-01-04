const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const express_bars = require("express-handlebars");
const request = require("request");
//create a path and route
// create a static folder

// KEY:pk_8f8c8931a32344448710e122adbfe626

request(
  "https://could.iexapis.com/stable/stocks/fb/quote?token=pk_8f8c8931a32344448710e122adbfe626",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    if (res.statusCode === 200) {
      console.log(body);
    }
  }
);
// handlebars
app.engine("handlebars", express_bars());
app.set("view engine", "handlebars");
const otherStuff = "This is other stuff";
app.get("/", (req, res) => {
  res.render("home", {
    stuff: otherStuff
  });
});
// defines the path to the public directory
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
