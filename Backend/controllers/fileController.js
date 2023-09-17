const express = require("express");
const multer = require("multer");
const File = require("../models/fileModel");

const storage = multer.memoryStorage(); // Store files in memory as Buffers
const upload = multer({ storage });

// // Set up multer storage and file filtering
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Specify the upload directory
//   },
//   filename: (req, file, cb) => {
//     const timestamp = Date.now();
//     const filename = `${timestamp}-${file.originalname}`;
//     cb(null, filename);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   // You can implement file type filtering here if needed
//   // Example: Allow only image files
//   // if (file.mimetype.startsWith('image/')) {
//   //   cb(null, true);
//   // } else {
//   //   cb(new Error('Invalid file type'), false);
//   // }
//   cb(null, true);
// };

// const upload = multer({ storage, fileFilter });

// Define endpoints for file upload and download
//get a file
const getFile = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the file by its ID in the database
    const file = await File.findById(id);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Set the appropriate headers to indicate the file type and trigger download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${file.filename}"`
    );
    res.setHeader("Content-Type", "application/octet-stream");

    // Send the file data as the response
    res.send(file.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Upload a file
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { originalname, buffer } = req.file;
    const user_id = req.body.user_id;
    const parentFolder = req.body.parentFolder;

    // Create a new file document and save it to the database
    const file = new File({
      filename: originalname,
      size: buffer.length,
      dateUploaded: new Date(),
      user_id: user_id,
      parentFolder: parentFolder,
      data: buffer,
    });

    await file.save();

    // You can process the uploaded file here
    // For example, save file information to a database
    // and return relevant data as a response

    res.json({ message: "File uploaded successfully", file: req.file });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Server error" });
  }
};

module.exports = {
  getFile,
  uploadFile,
};
