// import express from "express";

const jwt = require("jsonwebtoken");
const SECRET = "luby";

function verifyJWT(req, res, next) {
  const token = req.headers["x-acess-token"];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();

    req.userId = decoded.userId;
    next();
  });
}

module.exports = verifyJWT;
