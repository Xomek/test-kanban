import { Avatar, Stack } from "@mui/material";
import type { TaskProps } from "./Task.types";
import avatarImage from "../../../../assets/images/Bitmap.jpg";
import arrowsImage from "../../../../assets/images/arrows.png";

import styles from "./Task.module.css";

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <Stack className={styles.task} direction="row">
      <div className={styles.avatars}>
        <Avatar src={avatarImage} />
        <Avatar src={avatarImage} style={{ transform: "translateY(-15px)" }} />

        <img src={arrowsImage} alt="arrows" />
      </div>
      <div className={styles.content}>
        {task.title}
        <span className={styles.title}>
          Интерфейс динамики кадров на предприятии
        </span>
      </div>
    </Stack>
  );
};

export default Task;
