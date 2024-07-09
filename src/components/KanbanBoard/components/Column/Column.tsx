import { Draggable } from "react-beautiful-dnd";
import Task from "../Task";
import { Task as TaskType } from "../../../../types/task.types";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Button, Stack } from "@mui/material";
import type { ColumnProps } from "./Column.types";

import styles from "./Column.module.css";

const Column: React.FC<ColumnProps> = ({
  column,
  onAddTask,
  onRemoveColumn,
}) => {
  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <h3 className={styles.title}>
          <PlayCircleFilledWhiteOutlinedIcon color="primary" />
          {column.title}
        </h3>
        <Stack direction="row">
          <CreateOutlinedIcon />
          <DeleteOutlineOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={() => onRemoveColumn(column.id)}
          />
        </Stack>
      </div>
      <div className={styles.tasks}>
        {column.tasks.map((task: TaskType, index: number) => (
          <Draggable
            key={task.id}
            draggableId={task.id.toString()}
            index={index}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Task task={task} />
              </div>
            )}
          </Draggable>
        ))}
      </div>

      <Button
        className={styles.addIcon}
        variant="contained"
        color="info"
        onClick={() => onAddTask(column.id)}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default Column;
