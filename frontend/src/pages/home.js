import { useState, useEffect } from "react";
import { useFilesContext } from "../hooks/useFilesContext";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import FileDetails from "../components/FileDetails";
import FileForm from "../components/FileForm";
import Sidebar from "../components/sideBar";
import Homepage from "../components/Homepage";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";

const Home = () => {
  const { files, dispatch } = useFilesContext();
  const { user } = useAuthContext();
  const [activeMenuItem, setActiveMenuItem] = useState("menu-item home");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  // Fetch all files
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch("/api/files", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_FILES", payload: json.files });
      }
    };

    if (user) {
      fetchFiles();
    }
  }, [dispatch, user]);

  // Check if documents is null or undefined
  console.log(files);
  if (files == null) {
    return <div className="home">Loading...</div>;
  }
  console.log(files);
  return (
    <div className="home">
      <div className="siding">
        <Sidebar
          activeMenuItem={activeMenuItem}
          onMenuItemClick={handleMenuItemClick}
        />
      </div>
      {/* <div>
        <FileList />
      </div> */}
      {/* {activeMenuItem === "menu-item upload" && <FileUpload />}
      {activeMenuItem === "menu-item home" && <Homepage />} */}
      {/* {files.length > 0 || files == null ? (
        <div className="files">
          {files &&
            files.map((file) => <FileDetails key={file._id} file={file} />)}
        </div>
      ) : (
        <div>
          <FileUpload />
        </div>
      )} */}
      <div className="files">
        {files &&
          files.map((file) => <FileDetails key={file._id} file={file} />)}
      </div>
      <div className="forming">
        <FileForm />
      </div>
    </div>
  );
};

export default Home;
