import expressLayouts from "express-ejs-layouts";
import express from "express";
import dotenv from "dotenv";
import path from "path";
const app = express();

// DOTENV CONFIG
dotenv.config({ path: path.join(".env") });

// LiveReload For Auto Refresh || Listening in public folder only
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
const Public = path.dirname("Public");
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
