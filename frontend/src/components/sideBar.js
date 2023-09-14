import React, { useState } from "react";
import "../styles/sidebar.css";
import "../styles/popup.css"; // You may need to import your CSS for styling

const Sidebar = () => {
  const [isAddFolderDialogOpen, setAddFolderDialogOpen] = useState(false);
  const [folders, setFolders] = useState([]); // Your folder data

  const toggleAddFolderDialog = () => {
    setAddFolderDialogOpen(!isAddFolderDialogOpen);
  };

  const handleAddFolder = (folderName) => {
    // Create a new folder with the given name and add it to your data
    const newFolder = {
      name: folderName,
      // Other folder properties as needed
    };
    setFolders([...folders, newFolder]);
    setAddFolderDialogOpen(false); // Close the dialog
  };
  // Calculate the number of subfolders
  const numSubfolders = folders.length;
  // const numSubfolders = 5;

  return (
    <div className="sidebar">
      <div>
        <ul className="menu-items">
          <li className="menu-item" onClick={toggleAddFolderDialog}>
            <i className="fas fa-plus"></i> New Folder
          </li>
          <li className="menu-item">
            <i className="fas fa-home"></i> Home
          </li>
          <li className="menu-item">
            <i className="fas fa-trash"></i> Trash
          </li>
          <li className="menu-item">
            <i className="fas fa-folder-open"></i> Folders &nbsp;{" "}
            {numSubfolders}
          </li>
          <li className="menu-item">
            <i className="fas fa-life-ring"></i> Support
          </li>
          {/* Add logic for the New Folder popup dialog */}
          {isAddFolderDialogOpen && (
            <AddFolderDialog onAddFolder={handleAddFolder} />
          )}
        </ul>
      </div>
    </div>
  );
};

// AddFolderDialog component (customize as needed)
const AddFolderDialog = ({ onAddFolder }) => {
  const [folderName, setFolderName] = useState("");

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleAddClick = () => {
    if (folderName.trim() !== "") {
      onAddFolder(folderName);
      setFolderName("");
    }
  };

  const handleCancelClick = () => {};

  return (
    <div className="popup-dialog">
      <h2>Create a New Folder</h2>
      <input
        type="text"
        placeholder="Folder Name"
        value={folderName}
        onChange={handleFolderNameChange}
      />
      <button onClick={handleAddClick}>Add Folder</button>
      <button onClick={handleCancelClick}>Cancel</button>
    </div>
  );
};

export default Sidebar;
