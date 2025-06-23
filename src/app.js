
/**
 * Importaciones
 */
const express = require("express");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const movieRoutes = require("./routes/movies.routes");
const userRoutes = require("./routes/users.routes");

/**
 * Hacer uso de Express
 */
const app = express();

/**
 * Establecer el puerto
 */
const port = process.env.PORT || 5000;

/**
 * Middlewares
 * Establecer la carpeta pública
 * Establecer el motor de plantillas
 * Establecer la carpeta de views
 * Parsear las solicitudes por formulario y json
 */
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded())

// parse application/json
app.use(express.json())
app.use(cookieParser());


/**
 * Rutas
 */
app.use("/", authRoutes);
app.use("/admin", movieRoutes);
app.use('/user', userRoutes);

/**
 * Pone el puerto a la escucha del servidor
 */
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
