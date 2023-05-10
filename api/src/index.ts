import { AppDataSource } from "./data-source";
import "reflect-metadata";
import router from "./routes";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(router);

AppDataSource.initialize().then(async () => {
  console.log("Connected to Database");
}).catch((err) => {
  console.error("Error during Data Source initialization", err);
});

app.get("/api/", (req, res) => {
  res.send("GameManage API");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});