const express = require("express");
const multer = require("multer");
const File = require("../models/fileModel");

const storage = multer.memoryStorage(); // Store files in memory as Buffers
const upload = multer({ storage });

// Define endpoints for file upload and download
// GET all files
const getFiles = async (req, res) => {
  try {
    const files = await File.find({}, "").sort({
      dateUploaded: -1,
    });
    res.status(200).json({ files });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const getFiles1 = async (req, res) => {
  const { id } = req.params;
  console.log("User ID  from file controller is ", id);

  try {
    const files = await File.find({ user_id: id }).sort({
      dateUploaded: -1,
    });
    res.status(200).json({ files });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
// GET a single file
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

// DOWNLOAD a file
const downloadFile = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the file by its ID in the database
    const file = await File.findById(id);

    if (!file) {
      return res.status(404).send("File not found");
    }

    // Set response headers for file download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${file.filename}"`
    );
    res.setHeader("Content-Type", "application/octet-stream");

    // Send the file buffer as the response
    res.send(file.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error 1");
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
    const title = req.body.title;
    const description = req.body.description;

    // Create a new file document and save it to the database
    const file = new File({
      title: title,
      description: description,
      filename: originalname,
      size: buffer.length,
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
  getFiles,
  getFiles1,
  downloadFile,
};
