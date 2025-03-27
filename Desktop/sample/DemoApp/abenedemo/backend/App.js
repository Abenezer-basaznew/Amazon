// Import the express module
const express = require("express");
// Import the mysql module
const mysql = require("mysql2");
// Create the express app
const app = express();
// Define the connection parameters for the database
const dbConfig = {
  connectionLimit: 10,
  password: "demoapp",
  user: "demoapp",
  host: "localhost",
  database: "demoapp"
};
// Create the connection to the database
const connection = mysql.createConnection(dbConfig);
// Connect to the database
connection.connect((err)=> {
  if (err) throw err;
  console.log("Connected!");
});
//use express.json() to parse the request body
app.use(express.json());
//allow CORS to all
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
//add employee in mysql 
app.post("/add-employee", (req, res) => {

  const sql = `INSERT INTO employ_info (first_name, last_name, email, password) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.password}')`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
  const response = {
    status: "success",
    message: "Employee added successfully"
  };
  res.status(200).json(response);
});


//post request to login an employee
app.post("/login", (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM employ_info WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      res.status(200).json({
        status: "success",
        message: "Login successful"
      });
    } else {
      res.status(401).json({
        status: "error",
        message: "Invalid email or password"
      });
    }
  });
});
















app.get("/", (req, res) => {
  res.send("Testing!");
});







// Set up the port to listen to 
const port = 4000;
// Set up the listener 
app.listen(port, () => console.log(`Listening on port ${port}`));