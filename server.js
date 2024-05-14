console.log("web serverni boshlash");
const express = require("express");
const http = require("http");

const app = express();
//1.kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2.session code

//3.views code
app.set("views", "views");
app.set("view engine", "ejs");

//4.routing code
app.get("/", function (req, res) {
  res.render("harid");
});

//server xosil qilamiz
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port:${PORT}`);
});
