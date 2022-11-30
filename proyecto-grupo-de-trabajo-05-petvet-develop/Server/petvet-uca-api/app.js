var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

const mongoose = require("./config/mongoose")

// se puede omitir el .js
const apiRouter = require('./routes/api/index.router');

var app = express();

mongoose.connect();

//justo despues de inicializar nuestra aplicacion

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//en esta ruta ejecuta postRouter osea post.router.js
app.use("/api", apiRouter);

module.exports = app;
