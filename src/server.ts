import express from "express";
const app = express();

app.listen(8181, () => {
  console.log(`O ${process.env.PROJECT_NAME} iniciou!`);
});
