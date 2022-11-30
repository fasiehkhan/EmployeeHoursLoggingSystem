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
    res.send("<h1>Welcome to the EHLS API! :)<h1>")
});


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

app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user WHERE username = ? AND password = ?;", 
        [username, password],
        (err, result) => {

            if (err) {
                res.send({ err: err })
            } 
            
            if (result.length > 0) {
                res.send(result)
                console.log(result)
            } else {
                res.send({ message: "Wrong username/password combo!" });
            }

        }
        ); 
});


app.listen(process.env.PORT || PORT);