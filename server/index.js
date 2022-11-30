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

// Gets all the employees records, will be used for manager table
app.get("/api/employee", (req,res) => {
    const sqlInsert = `SELECT * FROM employee_time`
    db.query(sqlInsert, (err,result) => {
        res.send(result)
    })
});

// When start shift or break pressed, creates a record
app.get("/api/startShiftBreak/*/*/*", (req,res) => {
    const valuesArray = req.originalUrl.split("/");

    const userIdVal = valuesArray[3];
    const usernameVal = valuesArray[4];
    const shiftTypeVal = valuesArray[5];

    const sqlInsert = `INSERT INTO employee_time (userID, username, type, endTime, time, status) VALUES (${userIdVal}, '${usernameVal}', '${shiftTypeVal}', null, 0, "Accepted");`
    db.query(sqlInsert, (err,result) => {
        console.log(err)
        res.send(result)
    })
});


// When start shift or break pressed, updates record and ends shift
app.get("/api/endShiftBreak/*", (req,res) => {
    const valuesArray = req.originalUrl.split("/");
    console.log(valuesArray);
    const userIdVal = valuesArray[3];
    const endDateTime = new Date();

    const sqlGet = `SELECT * FROM employee_time WHERE userID=${userIdVal} AND startTime IS NOT NULL AND endTime IS NULL;`

    db.query(sqlGet, (err,result) => {
        const startDateTime = result[0].startTime;
        console.log(startDateTime);

        const sqlUpdate = `UPDATE employee_time SET startTime=${startDateTime},endTime=${endDateTime} WHERE userID=${userIdVal} and endTime IS NULL;`
        db.query(sqlUpdate, (err,result) => {
            if(err) throw err
            console.log(result)
            
            res.send(result)
        })
    })
});



// Gets a specific employees records for employee dashboard
app.get("/api/employeeSpecific/*", (req,res) => {
    const valuesArray = req.originalUrl.split("/");
    userId = valuesArray[3];
    const sqlInsert = `SELECT * FROM employee_time WHERE userID=${userId};`
    //const sqlInsert = `DELETE FROM employee_time WHERE userID=${userId} AND startTime IS NOT NULL AND endTime IS NULL;`

    db.query(sqlInsert, (err,result) => {
        res.send(result)
    })
});

// For time punches, checks data to see which buttons to disable
app.get("/api/endTimeNull/*", (req,res) => {
    const valuesArray = req.originalUrl.split("/");
    const userId = valuesArray[3];

    const sqlInsert = `SELECT * FROM employee_time WHERE userID=${userId} AND startTime IS NOT NULL AND endTime IS NULL;`
    db.query(sqlInsert, (err,result) => {
        res.send(result)
    })
});



/*
app.post('/register', (req, res)=> {

    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)", 
        [username, password], 
        (err, res) => {
        console.log(err) 
        }
        ); 
});
*/

//const sqlInsert = `DELETE FROM employee_time WHERE userID=${userId} AND startTime IS NOT NULL AND endTime IS NULL;`


app.listen(process.env.PORT || PORT);