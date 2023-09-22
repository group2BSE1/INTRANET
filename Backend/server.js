require("dotenv").config();

const express = require("express");
const mssql = require("mssql");
const sequelize = require("./db");
const documentRoutes = require("./routes/documents");
const userRoutes = require("./routes/user");
const fileRoutes = require("./routes/files");

// express app
const app = express();

// register global middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route handler
app.use("/api/documents", documentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/files", fileRoutes);

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("connected to db & listening on port", process.env.PORT);
  });
});
