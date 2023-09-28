import { useState, useEffect } from "react";
import { useFilesContext } from "../hooks/useFileContext";
import { useAuthContext } from "../hooks/useAuthContext";

import FileForm from "../components/FileForm";
import Sidebar from "../components/sideBar";
import FileUpload from "../components/FileUpload";
import FileListOne from "../components/FileListOne";
import SharePage from "../components/sharepage";
import DecisionPage from "../components/DecisionPage";
import FileTrash from "../components/FileTrash";

const Home = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("menu-item home");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="home">
      <div className="siding">
        <Sidebar
          activeMenuItem={activeMenuItem}
          onMenuItemClick={handleMenuItemClick}
        />
      </div>
      {activeMenuItem === "menu-item upload" && <FileUpload />}
      {activeMenuItem === "menu-item home" && <DecisionPage />}
      {activeMenuItem === "menu-item share" && <SharePage />}
      {activeMenuItem === "menu-item myfiles" && <FileListOne />}
      {activeMenuItem === "menu-item trash" && <FileTrash />}
      {/* <div>
        <ColumnPage />
      </div> */}
      <div className="forming">
        <FileForm />
      </div>
    </div>
  );
};

export default Home;
