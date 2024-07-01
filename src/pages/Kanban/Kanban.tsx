import { Button } from "@mui/material";
import { useState } from "react";
import { KanbanBoard } from "../../components";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import type { BoardType } from "../../components/KanbanBoard/KanbanBoard.types";
import type { ColumnType } from "../../components/KanbanBoard/components/Column/Column.types";

import styles from "./Kanban.module.css";

const Kanban: React.FC = () => {
  const [board, setBoard] = useState<BoardType>({ columns: [] });

  const addColumn = () => {
    const newColumn: ColumnType = {
      id: Date.now().toString(),
      title: `Column ${board.columns.length + 1}`,
      tasks: [],
    };
    setBoard({ ...board, columns: [...board.columns, newColumn] });
  };

  const removeColumn = (columnId: string) => {
    setBoard({
      ...board,
      columns: board.columns.filter((column) => column.id !== columnId),
    });
  };

  const addTask = (columnId: string) => {
    const newTask = { id: Date.now().toString(), title: `#20413:` };
    const newColumns = board.columns.map((column) => {
      if (column.id === columnId) {
        return { ...column, tasks: [...column.tasks, newTask] };
      }
      return column;
    });
    setBoard({ ...board, columns: newColumns });
  };

  // const updateColumnTitle = (columnId: string, newTitle: string) => {
  //   const newColumns = board.columns.map((column) => {
  //     if (column.id === columnId) {
  //       return { ...column, title: newTitle };
  //     }
  //     return column;
  //   });
  //   setBoard({ ...board, columns: newColumns });
  // };

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>Проекты</h1>
        <PlayCircleOutlineSharpIcon color="error" />
        <div>CRM - система / Процессы</div>
      </div>

      <div className={styles.header}>
        <div className={styles.subtitle}>
          <WavesOutlinedIcon />
          Процессы проекта CRM - система
        </div>
        <Button onClick={addColumn} variant="contained">
          Добавить столбец
        </Button>
      </div>

      <KanbanBoard
        board={board}
        addTask={addTask}
        removeColumn={removeColumn}
        setBoard={setBoard}
      />
    </div>
  );
};

export default Kanban;
