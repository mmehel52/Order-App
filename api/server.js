const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

const app = express();
const port = 5000;

app.listen(port, () => {
  connect();
  console.log(`app is listening on port ${port}`);
});
