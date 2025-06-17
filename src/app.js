
const express = require('express');

const frontRoutes = require('./routes/front.routes');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

app.use(express.urlencoded());
app.use(express.json());


// RUTAS
app.use('/', frontRoutes);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})
