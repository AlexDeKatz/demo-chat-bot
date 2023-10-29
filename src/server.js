import express from "express";
import cors from "cors";
import "dotenv/config";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();

app.use(cors());

//config server to pass data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/favicon.ico", (req, res) => {});

//config view engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening on port ${port}!`));
