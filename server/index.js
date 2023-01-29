const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
host:"localhost",
user:"Leandro",
password:"P@ssworld!",
database:"crudgames",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let sql =  "INSERT INTO games ( name, cost, category ) VALUES ( ?, ?, ? )";
    db.query(sql, [name, cost, category], (err, result) =>{
        console.log(err);
    });
});
app.get("/",(req, res) =>{

});

app.listen(3001, () =>{
    console.log("servidor online");
});