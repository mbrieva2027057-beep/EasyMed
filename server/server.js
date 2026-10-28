const express = require("express");
const cors = require("cors");
const db = require("./database");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
res.send("EasyMed backend running");
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