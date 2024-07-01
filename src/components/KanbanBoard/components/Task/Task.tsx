import { Avatar, Stack } from "@mui/material";
import avatarImage from "../../../../assets/images/Bitmap.jpg";
import type { TaskProps } from "./Task.types";

import styles from "./Task.module.css";

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <Stack className={styles.task} direction="row">
      <div className={styles.avatars}>
        <Avatar src={avatarImage} />
        <Avatar src={avatarImage} style={{ transform: "translateY(-15px)" }} />
      </div>
      <div className={styles.title}>{task.title}</div>
    </Stack>
  );
};

export default Task;
