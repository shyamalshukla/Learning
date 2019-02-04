const express = require("express");
const myAdder = require("./MyAdder").MyAdder;

const app = new express();

app.get("/", (req, res) => {
    res.status(200).json(new myAdder(req.query.x, req.query.y).Sum());
});

app.listen(8080, ()=>console.log("Listening2"));