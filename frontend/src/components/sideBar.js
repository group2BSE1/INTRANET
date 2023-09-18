import React, { useState } from "react";
import PopUp from "./popUp";
import "../styles/sidebar.css";
import "../styles/popup.css";
import FileUpload from "./FileUpload";
import Homepage from "./Homepage";

// function Sidebarin() {
//   const [activeMenuItem, setActiveMenuItem] = useState("home");

//   const handleMenuItemClick = (menuItem) => {
//     setActiveMenuItem(menuItem);
//   };

//   return (
//     <div className="App">
//       <Sidebarin
//         activeMenuItem={activeMenuItem}
//         onMenuItemClick={handleMenuItemClick}
//       />
//       <div className="main-content">
//         {activeMenuItem === "menu-item upload" && <FileUpload />}
//         {activeMenuItem === "menu-item home" && <Homepage />}
//       </div>
//     </div>
//   );
// }

const Sidebar = ({ activeMenuItem, onMenuItemClick }) => {
  //State to manange the dialog visibility
  const [open, setOpen] = useState(false); //Control dropdown
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [folders, setFolders] = useState([
    {
      name: "Folders",
      subfolders: [],
    },
  ]); // Your folder data

  //Function to open the popup
  const openPopup = () => {
    setPopupOpen(true);
  };
  //Function to close the popup
  const closePopup = () => {
    setPopupOpen(false);
  };

  if (isPopupOpen) {
    document.body.classList.add("active-popup");
  } else {
    document.body.classList.remove("active-popup");
  }

  const handleAddFolder = (folderName) => {
    // Create a new folder with the given name and add it to your data
    const newFolder = {
      name: folderName,
      subfolders: [],
      // Other folder properties as needed
    };

    const updatedFolders = [...folders];

    if (folders.length === 1 && folders[0].name === "Folders") {
      // Add the new folder as a subfolder of "Folders"
      updatedFolders[0].subfolders.push(newFolder);
    } else {
      // Add the new folder as a top-level folder
      updatedFolders.push(newFolder);
    }

    setFolders(updatedFolders);
    setPopupOpen(false); // Close the dialog
  };

  // const handleHome = () => {
  //   document.getElementById("home").add("active");
  //   console.log("Hello");
  // };
  // Calculate the number of subfolders
  const numSubfolders = folders.length;

  return (
    <div className="sidebar">
      <div>
        <ul className="menu-items">
          <li className="menu-item" onClick={openPopup}>
            <i className="fas fa-plus"></i> New Folder
          </li>
          <li
            className={activeMenuItem === "menu-item home" ? "active" : ""}
            onClick={() => onMenuItemClick("menu-item home")}
          >
            <i className="fas fa-home"></i> Home
          </li>
          <li
            className={activeMenuItem === "menu-item upload" ? "active" : ""}
            onClick={() => onMenuItemClick("menu-item upload")}
          >
            <i className="fas fa-upload"></i> Upload File
          </li>
          <li className="menu-item">
            <i className="fa-solid fa-file-lines"></i> MyFiles
          </li>
          <li className="menu-item">
            <i className="fas fa-folder-open"></i> Folders &nbsp;
            {numSubfolders} &nbsp;
            <i
              className={
                open
                  ? "fa-solid fa-circle-chevron-right dropping"
                  : "fa-solid fa-circle-chevron-right"
              }
              onClick={() => setOpen(!open)}
            ></i>
          </li>
          {/* Render "Folders" menu item with subfolders dynamically */}
          {/* {folders.map((folder, index) => (
            <li className={open ? "menu-items" : "menu-items subfolders"}>
              <li className="menu-item" key={index}>
                <i className="fas fa-folder"></i> {folder.name} &nbsp;
                {folder.subfolders.length} &nbsp;{" "}
                <i
                  className={
                    open
                      ? "fa-solid fa-circle-chevron-right dropping"
                      : "fa-solid fa-circle-chevron-right"
                  }
                  onClick={() => setOpen(!open)}
                ></i>
                {folder.subfolders.map((subfolder, subIndex) => (
                  <li className="menu-item subfolder" key={subIndex}>
                    <i className="fas fa-folder"></i> {subfolder.name}
                  </li>
                ))}
              </li>
            </li>
          ))} */}

          <li className="menu-item">
            <i className="fas fa-trash"></i> Trash
          </li>
          <li className="menu-item">
            <i className="fas fa-life-ring"></i> Support
          </li>
          {/* Add logic for the New Folder popup dialog */}
          {isPopupOpen && (
            <PopUp onCancel={closePopup} onAddFolder={handleAddFolder} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
