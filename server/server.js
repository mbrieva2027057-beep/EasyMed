const express = require("express");
const cors = require("cors");
const db = require("./database");
 
const app = express();
 
console.log("SERVER STARTED WITH REGISTER ROUTE");


app.use(cors());
app.use(express.json());
 
app.get("/", (req, res) => {
});
 
app.get("/users", (req, res) => {
db.query("SELECT * FROM users", (err, results) => {
if (err) {
    res.status(500).send(err);
} else {
    res.json(results);
}
});
});
 
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
app.post("/register", (req, res) => {
 
const {
firstName,
lastName,
email,
password
} = req.body;
 
db.query(
`INSERT INTO users
(first_name, last_name, email, password)
VALUES (?, ?, ?, ?)`,
[firstName, lastName, email, password],
(err, result) => {
 
if (err) {
console.log(err);
return res.status(500).send("Database Error");
}
 
console.log("USER CREATED");
 
res.send("User Registered");
}
);
});