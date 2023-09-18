import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const FileList = () => {
  const [files, setFiles] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    // Fetch files from the backend when the component mounts
    console.log("User ID from frontend is: ", user.token);
    fetch(`/api/files/files/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setFiles(data.files);
        console.log(data.files);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, []);

  //Function to download a file
  const handleDownload = (id, filename) => {
    console.log("The ID is ", id);
    console.log("The filename is ", filename);
    const downloadUrl = `api/files/download/${id}`; // Adjust the URL to match your backend route

    fetch(downloadUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        // Create a URL for the blob data and trigger a download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        // window.open(downloadUrl, "_blank");
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
        // Handle any error, such as displaying an error message to the user
      });
  };

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <div className="item" key={file._id}>
            <h3>{file.filename}</h3>
            <button onClick={() => handleDownload(file._id, file.filename)}>
              Download File
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
