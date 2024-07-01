import { Draggable } from "react-beautiful-dnd";
import Task from "../Task";
import { Task as TaskType } from "../../../../types/task.types";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AddIcon from "@mui/icons-material/Add";
import type { ColumnProps } from "./Column.types";

import styles from "./Column.module.css";
import { IconButton } from "@mui/material";

const Column: React.FC<ColumnProps> = ({
  column,
  onAddTask,
  onRemoveColumn,
  // onUpdateColumnTitle,
}) => {
  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <h3>{column.title}</h3>
        <div>
          <CreateOutlinedIcon />
          <DeleteOutlineOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={() => onRemoveColumn(column.id)}
          />
        </div>
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

      <IconButton
        className={styles.addIcon}
        color="primary"
        onClick={() => onAddTask(column.id)}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Column;
