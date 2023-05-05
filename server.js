import express from "express";
import { engine } from "express-handlebars";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose.connect(process.env.mongoConnectionUrl);


import departmentRouter from "./routes/departments.js";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");


app.use("/departments", departmentRouter);

app.get("/adminstrator", (req, res) => {

  res.render("adminstrator", { layout: false });
});

app.get("/adminstrator/tasks", (req, res) => {

  res.render("adminTasks", { layout: false });
});

app.listen(process.env.port, () => {
  console.log(
    `started the application on http://localhost:${process.env.port}`
  );
});