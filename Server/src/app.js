const express = require("express");
const mainRouter = require("./routes/index");
const morgan = require("morgan");
const server = express();

//! Midlleware
//? creado manual
server.use((_req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

//? framework morgan --> info en consola para mejorar el desarrollo
server.use(morgan("dev"));

//? Convierte cualquier archivo Json que recibimos por res.body a obj JavaScript
server.use(express.json());

//!Routes
server.use("/rickandmorty", mainRouter);

module.exports = server;
