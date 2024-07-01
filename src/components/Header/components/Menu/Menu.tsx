import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>Задачи</li>
      <NavLink
        to="/"
        className={styles.item}
        style={({ isActive }) => {
          return {
            color: isActive ? "#fff" : "",
            borderBottom: "2px solid #E96880",
          };
        }}
      >
        Messages
      </NavLink>
      <li className={styles.item}>Проекты</li>
      <li className={styles.item}>Статистика</li>
      <li className={styles.item}>Финансы</li>
      <li className={styles.item}>План</li>
      <li className={styles.item}>Пользователи</li>
    </ul>
  );
};

export default Menu;
