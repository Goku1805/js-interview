import express from "express";
import dataRoute from "./routes/data";
import authRoute from "./routes/auth";
import config from "./config/index.js";
import cors from "cors";
import authMiddleware from "./middlewares/auth.js";
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

//routes
app.use(config.versionUrl, authRoute);
app.use(config.versionUrl, authMiddleware, dataRoute);

export default app;
