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
     app.post("/login", (req, res) => {
     
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
    [firstName, lastName, email, password],
    (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Database Error");
        }
    }
    );
});