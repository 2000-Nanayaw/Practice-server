//import express , body-Parser
const express = require("express");
const bodyParser = require("body-parser");

const {
  listBanksController,
  createBanksController,
  updateBanksController,
  deleteBanksController,
} = require("./controllers");
//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());

//routes
//view banks - get method
server.get("/bank", listBanksController);
//create banks -post method
server.post("/bank", createBanksController);
//update banks -put method
server.put("/bank", updateBanksController);
//delete banks -delete method
server.delete("/bank", deleteBanksController);

//start server
server.listen(2000, "localhost", () =>
  console.log("server is running on port 2000")
);
