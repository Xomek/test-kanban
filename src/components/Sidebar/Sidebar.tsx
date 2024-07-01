import React from "react";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddIcon from "@mui/icons-material/Add";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";

import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <SearchRoundedIcon className={styles.icon} fontSize="large" />
        <AddIcon className={styles.icon} fontSize="large" />
        <GridViewSharpIcon className={styles.icon} fontSize="large" />
      </div>

      <HelpOutlineRoundedIcon className={styles.icon} fontSize="large" />
    </div>
  );
};

export default Sidebar;
