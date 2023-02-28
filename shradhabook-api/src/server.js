import configViewEngine from "./configs/viewEngine";
import configCors from "./configs/cors";

import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";

import express from "express";
import bodyParser from "body-parser";
import connection from "./configs/connection";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// config cors
configCors(app)

// config view engine
configViewEngine(app)

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// test connection
// connection();

// init web routes
initWebRoutes(app)
initApiRoutes(app)
app.listen(PORT, () => {
    console.log("==> Backend server is running on the port = " + PORT)
})