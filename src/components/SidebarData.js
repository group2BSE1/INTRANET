import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
import * as RiIcons from "react-icons/ri";
export const SidebarData = [
  {
    title: "NewFolder",
    path: "/newfolder",
    icon: <AiIcons.AiFillFolder />,
    cName: "nav-text",
  
  },
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Trash",
    path: "/trash",
    icon: <FaIcons.FaTrash />,
    cName: "nav-text",
  },

  ///////////////////////////////////
  {
    title: "Folders",
    path: "/folders",
    icon: <AiIcons.AiFillFolder />,
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
     title: "ICT Department",
    path: "/folders/ict",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
      },
      {
        title: "RISK Department",
       path: "/folders/risk",
       icon: <IoIcons.IoIosPaper />,
       cName: "nav-text",
         },
    ]
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
