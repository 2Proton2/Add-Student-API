const express =  require('express');
const app = express();
const port = process.env.PORT || 8000;
const { default: mongoose } = require('mongoose');
//connecting to db file
require("./db/connection")
//accessing the student collection
const Student = require('./models/students');

//whatever user will be requesting will be in JSON format
app.use(express.json());

//post method for students
app.post("/students", (req, res) => {
    let createStudentInstance = new Student(req.body);
    createStudentInstance.save()
    .then(() => {
        res.status(201).send(`${req.body} document added in collection`);
    })
    .catch((err) => {
        res.status(401).send(`Error while add student in collection. Root cause - '${err}'`)
    });
});

//default page
app.get("/", (req, res) => {
    res.send("get default");
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`);
});