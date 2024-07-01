import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <SettingsOutlinedIcon />
      eveli.todo
    </div>
  );
};

export default Logo;
