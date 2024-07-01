import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Column } from "./components";
import type { BoardProps } from "./KanbanBoard.types";

import styles from "./KanbanBoard.module.css";
import { useKanbanBoard } from "./useKanbanBoard.hook";

const KanbanBoard: React.FC<BoardProps> = ({
  board,
  addTask,
  removeColumn,
  setBoard,
}) => {
  const { onDragEnd } = useKanbanBoard(board, setBoard);

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
