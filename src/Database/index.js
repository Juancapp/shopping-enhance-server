const mongoose = require("mongoose");
require('dotenv').config();

const db = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("DB working"))
    .catch((error) => console.log(error));
};

module.exports = db;