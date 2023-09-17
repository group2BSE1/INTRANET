const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fileSchema = new Schema({
  filename: { type: String, required: true },
  size: { type: Number, required: true },
  dateUploaded: { type: Date, required: true },
  user_id: { type: String, required: true },
  parentFolder: { type: String, required: true },
  data: { type: Buffer, required: true }, // Binary data field for storing the file content
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
