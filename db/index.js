const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vincevullo:VrEf0Hn0u44ns686@cluster0.8zm9jhe.mongodb.net/walksafedb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to mongoDB");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
