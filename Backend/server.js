require("dotenv").config();

const express = require("express");
const mssql = require("mssql");
// const mssql = require("mssql/msnodesqlv8");
// const sequelize = require("./db");
// const mongoose = require("mongoose");
// const documentRoutes = require("./routes/documents");
// const userRoutes = require("./routes/user");
// const fileRoutes = require("./routes/files");

// express app
const app = express();

// register global middleware
// app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// route handler
// app.use("/api/documents", documentRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/files", fileRoutes);

// connect to db
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     // listen for requests
//     app.listen(process.env.PORT, () => {
//       console.log("connected to db & listening on port", process.env.PORT);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const dbConfig = {
  // user: "CLEARING-PC1\\admin",
  // password: "",
  server: "localhost",
  database: "INTRANET",
  // driver: "msnodesqlv8",
  options: {
    trustedConnection: true, // Use Windows Authentication
  },
};

// connect to db
// mssql.connect(dbConfig, (err) => {
//   if (err) {
//     console.error("Database connection error: ", err);
//   } else {
//     console.log("Connected to SQL Server database");
//   }
// });

mssql.connect(dbConfig, function (err) {
  if (err) console.log(err);
  console.log("Successful");
});

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });
// Sync the database and start the server
// sequelize.sync().then(() => {
//   app.listen(process.env.SQL_PORT, () => {
//     console.log("connected to db & listening on port", process.env.SQL_PORT);
//   });
// });
