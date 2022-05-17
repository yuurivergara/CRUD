import express from "express";
const routes = require("./routes/admin");
const publicr = require("./routes/public");
const app = express();
require("./database/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/admin", routes);
app.use("/", publicr);
app.listen(8989, () => {
  console.log("Server ON");
});
