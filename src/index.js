const express = require("express");
const cors = require("cors");
const router = require("./routes")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());
app.use(router)

dotenv.config();

const port = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE_URL, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log("Failed connection to database", error);
  } else {
    // eslint-disable-next-line no-console
    console.log("Connected to database");
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server ready on port ${port}`);
    });
  }
});
