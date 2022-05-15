import express from "express";
const routes = require("./routes");
const app = express();
require("./database/index");

app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.listen(8181);
