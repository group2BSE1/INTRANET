// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const fileSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     filename: {
//       type: String,
//       required: true,
//     },
//     size: {
//       type: Number,
//       required: true,
//     },
//     user_id: {
//       type: String,
//       required: true,
//     },
//     parentFolder: {
//       type: String,
//       required: true,
//     },
//     data: {
//       type: Buffer,
//       required: true,
//     }, // Binary data field for storing the file content
//   },
//   { timestamps: true }
// );

// const File = mongoose.model("File", fileSchema);

// module.exports = File;

const { DataTypes } = require("sequelize");
// const sequelize = require("../db"); // Replace with your Sequelize instance

const File = sequelize.define(
  "File",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentFolder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.BLOB, // For binary data storage (equivalent to Buffer in MongoDB)
      allowNull: false,
    },
  },
  {
    timestamps: true,
    modelName: "File",
  }
);

module.exports = File;
