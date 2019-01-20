const express = require("express");
const path = request("path");

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENVV === "production") {
  app.use(express.static("client/build"));
}

// Adding routes, both API and view
app.use(routes);
