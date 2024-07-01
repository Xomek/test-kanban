import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Column } from "./components";
import type { BoardProps } from "./KanbanBoard.types";

import styles from "./KanbanBoard.module.css";

const KanbanBoard: React.FC<BoardProps> = ({
  board,
  addTask,
  removeColumn,
  setBoard,
}) => {
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const column = board.columns.find((col) => col.id === source.droppableId);
      if (!column) return;

      const tasks = Array.from(column.tasks);
      const [movedTask] = tasks.splice(source.index, 1);
      tasks.splice(destination.index, 0, movedTask);

      const newColumns = board.columns.map((col) => {
        if (col.id === column.id) {
          return { ...col, tasks };
        }
        return col;
      });

      setBoard({ ...board, columns: newColumns });
    } else {
      const sourceColumn = board.columns.find(
        (col) => col.id === source.droppableId
      );
      const destinationColumn = board.columns.find(
        (col) => col.id === destination.droppableId
      );
      if (!sourceColumn || !destinationColumn) return;

      const sourceTasks = Array.from(sourceColumn.tasks);
      const destinationTasks = Array.from(destinationColumn.tasks);
      const [movedTask] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, movedTask);

      const newColumns = board.columns.map((col) => {
        if (col.id === sourceColumn.id) {
          return { ...col, tasks: sourceTasks };
        }
        if (col.id === destinationColumn.id) {
          return { ...col, tasks: destinationTasks };
        }
        return col;
      });

      setBoard({ ...board, columns: newColumns });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.board}>
        {board.columns.map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={styles.column}
              >
                <Column
                  key={column.id}
                  column={column}
                  onAddTask={addTask}
                  onRemoveColumn={removeColumn}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
