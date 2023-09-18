const express = require("express");
const {
  uploadFile,
  getFile,
  getFiles,
  downloadFile,
} = require("../controllers/fileController");
const multer = require("multer");
const router = express.Router();

const storage = multer.memoryStorage(); // Store files in memory as Buffers
const upload = multer({ storage });

// Define an endpoint for file upload
// POST a new file
router.post("/upload", upload.single("file"), uploadFile);

// GET a file
router.get("/:id", getFile);

// GET all files
router.get("/files/:id", getFiles);

// DOWNLOAD a file
router.get("/download/:id", downloadFile);
module.exports = router;
