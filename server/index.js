const express = require("express")
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({path: './.env'});

const app = express();

const PORT = 3002;

app.use(express.json());
app.use(cors());

// Test connection 
app.get("/", (req,res) => {
    res.send("<h1>Hello there :)<h1>")
});


/*
// Create connection 
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,

});
*/
const db = mysql.createConnection(process.env.DATABASE_URL);

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

app.get("/api/employee", (req,res) => {
    console.log("hello");
    const sqlInsert = "SELECT * FROM employee_time;"
    db.query(sqlInsert, (err,result) => {
        res.send(result)
    })
});

app.post('/api/register', (req, res)=> {

    const username = req.body.username;
    const password = req.body.password;
    const usertype = req.body.usertype;
    db.query(
        "INSERT INTO user (username, password, userType) VALUES (?,?,?)", 
        [username, password, usertype], 
        (err, res) => {
        console.log(err) 
        }
        ); 
});


app.listen(process.env.PORT || PORT);