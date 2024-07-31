const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const Admin = require("./routes/admin.routes");
app.use("/api/v1/admin", Admin);
module.exports = app;
