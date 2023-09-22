// PopupMenu.js
import { useState } from 'react';
import React from 'react';

function PopupMenu({ isOpen, onClose, onSelect }) {
  // if (!isOpen) return null;

  // const [isMenuOpen, setMenuOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  // const openMenu = () => setMenuOpen(true);
  // const closeMenu = () => setMenuOpen(false);

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  //   closeMenu();
  // };
  return (
    <div className="popup-menu">
      <ul>
        <li>Trash</li>
        <li>Download</li>
        <li>Rename</li>
      </ul>
      <button className="close-button">
        Close
      </button>
      <div className="menu-icon">
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      {/* <PopupMenu isOpen={isMenuOpen} onClose={closeMenu} onSelect={handleOptionSelect} /> */}
      {/* {selectedOption && <div>You selected: {selectedOption}</div>} */}
    </div>
  );
}

export default PopupMenu;
