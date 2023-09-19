import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFilesContext } from "../hooks/useFileContext";
import FileDetails from "./FileDetails";

const FileList = () => {
  // const [files, setFiles] = useState([]);
  const { files, dispatch } = useFilesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchFiles = async () => {
      dispatch({ type: "SET_LOADING" });

      const response = await fetch("api/files", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json.files);

      if (response.ok) {
        // dispatch({ type: "SET_FILES", payload: json.files });
        dispatch({ type: "FETCH_SUCCESS", payload: json.files });
      }
      if (!response.ok) {
        dispatch({ type: "FETCH_ERROR", payload: json });
      }
    };

    if (user) {
      fetchFiles();
    }
  }, [dispatch, user]);

  //Function to download a file
  // const handleDownload = (id, filename) => {
  //   console.log("The ID is ", id);
  //   console.log("The filename is ", filename);
  //   const downloadUrl = `api/files/download/${id}`; // Adjust the URL to match your backend route

  //   fetch(downloadUrl)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.blob();
  //     })
  //     .then((blob) => {
  //       // Create a URL for the blob data and trigger a download
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", filename);
  //       document.body.appendChild(link);
  //       link.click();
  //       // window.open(downloadUrl, "_blank");
  //     })
  //     .catch((error) => {
  //       console.error("Error downloading file:", error);
  //       // Handle any error, such as displaying an error message to the user
  //     });
  // };

  return (
    <div className="uploaded">
      <h2>Uploaded Files</h2>
      <div className="files">
        {files &&
          files.map((file) => <FileDetails file={file} key={file._id} />)}
      </div>
      {/* <ul>
        {files &&
          files.map((file) => (
            <div className="item" key={file._id}>
              <h3>{file.filename}</h3>
              <button onClick={() => handleDownload(file._id, file.filename)}>
                Download File
              </button>
            </div>
          ))}
      </ul> */}
    </div>
  );
};

export default FileList;
