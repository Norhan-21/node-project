import express from "express";
import { engine } from "express-handlebars";
import methodOverride from 'method-override';
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose.connect(process.env.mongoConnectionUrl);

import subjectdRouter  from './routes/subjects.js'
import authRoutes  from './routes/auth.js'
import stRoutes from './routes/st.js'
import departmentRouter from "./routes/departments.js";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

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
app.use('/',authRoutes);
app.use('/',stRoutes)
//Subject Feature
app.use('/subjects',subjectdRouter);

app.listen(process.env.port, () => {
  console.log(
    `started the application on http://localhost:${process.env.port}`
  );
});
