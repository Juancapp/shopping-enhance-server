const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./src/app.js");

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
