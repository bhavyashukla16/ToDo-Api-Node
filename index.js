
const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// console.log(process.env);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var db = require('./db')


app.get("/", (req,res) => {
    res.send("This is the Home Page you fool!");
});

const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes);


app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})