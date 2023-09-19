import { useAuthContext } from "../hooks/useAuthContext";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const FileDetails = ({ file }) => {
  const { user } = useAuthContext();

  //Function to download a file
  const handleDownload = (id, filename) => {
    console.log("The ID is ", id);
    console.log("The filename is ", filename);
    const downloadUrl = `api/files/download/${id}`; // Adjust the URL to match your backend route

    fetch(downloadUrl, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
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
    <div className="file-details">
      <h4>{file.title}</h4>
      <p>
        <strong>Description: </strong>
        {file.description}
      </p>
      <p>
        <strong>Size: </strong>
        {file.size / 1000} KB
      </p>
      <p>
        {formatDistanceToNow(new Date(file.createdAt), { addSuffix: true })}
      </p>
      <div className="deleting">
        <span className="material-symbols-outlined">delete</span>
      </div>
      <div
        className="downloading"
        onClick={() => handleDownload(file._id, file.filename)}
      >
        <span className="material-symbols-outlined">download</span>
      </div>
    </div>
  );
};

export default FileDetails;
