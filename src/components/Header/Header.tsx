import { Menu, Profile } from "./components";
import { Logo } from "../../components";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
      <Profile />
    </header>
  );
};

export default Header;
