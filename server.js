console.log("web serverni boshlash");
const express = require("express");
const http = require("http");
const fs = require("fs");
const app = express();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});
//1.kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2.session code

//3.views code
app.set("views", "views");
app.set("view engine", "ejs");

//4.routing code

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

//server xosil qilamiz
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is running successfully on port:${PORT},http://localhost:${PORT}`
  );
});
