import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CurrencyRubleRoundedIcon from "@mui/icons-material/CurrencyRubleRounded";
import { useProfile } from "./useProfile";
import avatarImage from "../../../../assets/images/Bitmap.jpg";

import styles from "./Profile.module.css";

const Profile: React.FC = () => {
  const { anchorEl, open, handleClick, handleClose } = useProfile();

  return (
    <div className={styles.profile}>
      <div className={styles.wallet}>
        60 000 <CurrencyRubleRoundedIcon />
      </div>
      <NotificationsNoneOutlinedIcon />

      <Button
        className={styles.btnProfile}
        id="profile-button"
        aria-controls={open ? "profile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar src={avatarImage} />
        <div className={styles.name}>Назир</div>
      </Button>

      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
