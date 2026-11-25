// cd server
// node server.js

//git add .
//git commit -m "what I did"
// git push
const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());
    app.post("/appointments", (req, res) => {
     
        const {
        appointmentDate,
        notes
    } = req.body;
    console.log(req.body);
    res.send("Appointment Received");
});
app.post("/Login", (req, res) => {

    const { email, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, results) => {

            if (err) {
                console.log(err);
                return res.status(500).send("Database Error");
            }

            if (results.length === 0) {
                return res.send("User not found");
            }

            const user = results[0];

            if (user.password === password) {
                res.send("Login Successful");
            } else {
                res.send("Incorrect Password");
            }
        }
    );
});

app.post("/register", (req, res) => {

    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    const sql = `
        INSERT INTO users (first_name, last_name, email, password)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [firstName, lastName, email, password],
        (err, result) => {

            if (err) {
                console.log("Registration Error:", err);
                return res.status(500).send("Database Error");
            }

            console.log("User registered successfully!");

            res.status(201).send("Registration Successful");
        }
    );
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});