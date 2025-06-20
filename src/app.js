const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const movieRoutes = require("./routes/movies.routes");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());
//Cors
// const whiteList = ['http://localhost:5000', 'http://localhost:3000']
// app.use(cors({
//     origin: whiteList
// }))

// RUTAS
app.use("/", authRoutes);
app.use("/admin", movieRoutes);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
