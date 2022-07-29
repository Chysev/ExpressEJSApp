const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

// DOTENV CONFIG
require(dotenv).config;

// LiveReload For Auto Refresh || Listening in public folder only
const livereload = require("livereload");
const connectLiveReload = "connect-livereload";
const Public = path.join("Public");
const liveServer = livereload.createServer();
liveServer.watch(Public);
app.use(connectLiveReload());

// ENGINE
app.set("view engine", "ejs");
app.set("views", "pages");
app.set("layout", "App/App.ejs");
app.use(expressLayouts);

// STATIC FILES
app.use(express.static("global"));
app.use(express.static("public"));
app.use(express.static("public/css"));
app.use(express.static("public/mediaQueries"));
app.use(express.static("public/css/compontents-css"));
app.use(express.static("public/layouts"));
app.use(express.static("public/assets"));
app.use(express.static("public/assets/icons"));
app.use(express.static("public/assets/images"));

// Middleware Logs
app.use(logger);

// ROUTES
app.get("/", (req, res) => {
  console.log("Home Page");
  res.render("index.ejs");
});

// Middleware
function logger(req, res, next) {
  console.log("Logs ready");
  next();
}

app.listen(process.env.PORT || 3000);
