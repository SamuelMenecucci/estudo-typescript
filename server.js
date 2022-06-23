import express from "express";

const app = express();

app.use(express.static("dist"));

app.set("views", "dist");

app.get("/", (req, res) => res.render("index"));

app.listen(5000, () => console.log("server is running "));
