const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AppRouter = require("./routes/AppRouter");
const db = require('./db')

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("client"));

app.use("/api", AppRouter);
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

