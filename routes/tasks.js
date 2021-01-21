var express = require('express')
var router = express.Router()
var db = require('../db')
  


router.get("/", (req,res) => {
   

    let sql = 'SELECT * FROM tasks';
    let query = db.query(sql, (err, result) => {
       
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post("/add", (req,res) => {
    let task = req.body;
    let sql= 'INSERT INTO tasks SET ?';
    let query = db.query(sql, task, (err, result) => {
        if (err) throw err;
        console.log( result);
        res.send("Task added!");
    })
});

router.get("/:id", (req, res) => {
    let sql = `SELECT * FROM tasks WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.put("/:id", (req,res) => {

    let sql = `UPDATE tasks SET taskName = '${req.body.taskName}', taskDate = '${req.body.taskDate}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Task Updated!");
    })
});

router.delete("/:id", (req, res) => {
    let sql = `DELETE FROM tasks WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Task Deleted!");
    })
});



module.exports = router