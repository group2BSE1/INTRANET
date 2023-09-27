import React from "react";

const FilePopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="filepopup">
      <div className="filepopup-inner">
        <h2>Popup Content</h2>
        <p>This is a minor popup component.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
// const FilePopUp = () => {
//   return (
//     <div className="filepopup">
//       <div className="filepopup-inner">
//         <h2>Popup Content</h2>
//         <p>This is a minor popup component.</p>
//         <button>Close</button>
//       </div>
//     </div>
//   );
// };

export default FilePopUp;
