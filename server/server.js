const express = require("express");
const app = express();
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const usersData = require("./routes/api/users");
app.use("/users", usersData);

const itemsData = require("./routes/api/items");
app.use("/items", itemsData);

// start the server and listen on port 5000
app.listen(PORT, () => {
  console.log(`server is running at: ${BACKEND_URL}:${PORT}`);
});
