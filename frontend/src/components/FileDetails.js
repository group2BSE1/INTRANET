import { useAuthContext } from "../hooks/useAuthContext";
import { format } from "date-fns";

const FileDetails = ({ file }) => {
  const { user } = useAuthContext();
  const filename = file.filename;

  // Define a mapping of file extensions to corresponding icons
  const iconMap = {
    txt: <i className="fa-solid fa-file-lines"></i>,
    pdf: <i className="fa-solid fa-file-pdf" style={{ color: "#d60505" }}></i>,
    doc: <i className="fa-solid fa-file-word" style={{ color: "#3eb3fc" }}></i>,
    docx: (
      <i className="fa-solid fa-file-word" style={{ color: "#3eb3fc" }}></i>
    ),
    xls: (
      <i className="fa-solid fa-file-excel" style={{ color: "#217346" }}></i>
    ),
    xlsx: (
      <i className="fa-solid fa-file-excel" style={{ color: "#217346" }}></i>
    ),
    jpg: (
      <i className="fa-solid fa-file-image" style={{ color: "#3d3de1" }}></i>
    ),
    png: (
      <i className="fa-solid fa-file-image" style={{ color: "#3d3de1" }}></i>
    ),
    // Add more file types and corresponding icons as needed
  };
  const newfilename = filename.split(".");

  //Function to download a file
  // useEffect(
  //   () => {

  //   }
  // )
  const handleDownload = () => {
    const downloadUrl = `api/files/download/${file.id}`; // Adjust the URL to match your backend route
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
        link.setAttribute("download", file.filename);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <div className="table-row">
      <div className="table-cell">
        {iconMap[newfilename[1]]} &nbsp; {newfilename[0]}
      </div>
      <div className="table-cell">{file.username}</div>
      <div className="table-cell">
        {format(new Date(file.updatedAt), "MMM dd, yyyy")}
        {/* {file.updatedAt} */}
      </div>
      <div className="table-cell">{file.size / 1000} KB</div>
      <div className="table-cell">
        <div className="suffix">
          <i
            className="fa-solid fa-ellipsis-vertical"
            onClick={handleDownload}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default FileDetails;
